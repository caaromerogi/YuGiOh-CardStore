import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { Customer } from 'src/app/models/Customer';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email!:string;
  password!:string;
  registerForm:FormGroup;
  constructor(
    private firestoreService:FirestoreService,
    private authService:AuthService,
    private router:Router
    )
    {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), Validators.required]),
      confirmPassword: new FormControl(null, [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), Validators.required])
    }
    );
  }

  public catchClickEventEmail():void{
    this.authService.SingUp(this.email, this.password).then(
      data=> {
        let customer:Customer ={
          id: data.user.uid,
          deck : [],
          email : data.user.email!,
          balance : 0,
          imgPath : 'https://uploads3.yugioh.com/character/3/detail/detail/yamiyugi-l.png?1371744397'
        }
        this.firestoreService.setUser(customer).then(data => {
          this.swalFireUserCreated();
          this.router.navigateByUrl('/cards')
        })
      }
    )
    .catch(error => {
      if(error instanceof FirebaseError){
        this.swalFireUserExists();
      }
    })
  }

  public catchClickEventGoogle():void{
    this.authService.SingInWithGoogle().then(fireData => {
      this.firestoreService.getCustomer(fireData.user.uid).then(data => {
        if(!data){
          let customer:Customer ={
            id: fireData.user.uid,
            deck : [],
            email : fireData.user.email!,
            balance : 0,
            imgPath : fireData.user.photoURL!
          }
          this.firestoreService.setUser(customer).then(data => {
          })
        }
      })

      //TODO: Crear un behaviour subject para emitir la info del customer y mostrarla en el navbar
      this.firestoreService.customerObservable?.next(null)
      this.authService.currentUser?.next({
        email:fireData.user.email!,
        id:fireData.user.uid!
      })
      this.swalFireUserCreated();
      this.router.navigateByUrl('/cards')
    })
  }


  public catchStringEmail(event:string):void{
    this.email = event
  }
  public catchStringPassword(event:string):void{
    this.password = event
  }
  private swalFireUserCreated():void{
    Swal.fire({
      title:"<h5 style = 'color:white'>User created</h5>",
      icon: 'success',
      timer:2000,
      showCancelButton: false,
      showConfirmButton: false,
      background: '#222222'
    })
  }

  private swalFireUserExists():void{
    Swal.fire({
      title: "<h5 style = 'color:white'>Error</h5>",
      html: "<p style = 'color:rgb(133, 132, 132)'>Account already in use</p>",
      icon: 'error',
      timer:2000,
      showCancelButton: false,
      showConfirmButton: false,
      background: '#222222',
    })
  }
}
