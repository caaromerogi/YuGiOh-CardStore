import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService:AuthService,
    private router:Router,
    private firestoreService:FirestoreService){}
  email:string='';
  password:string='';
  confirmPassword:string='';

  signInWithEmail():void{
    this.sendEmailAndPassword()
  }
  signInWithGoogle():void{
    this.sendGoogleAuth();
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required,]),
    password: new FormControl(null, [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), Validators.required])
  });

  sendEmailAndPassword():void{
    this.authService.SignInWithEmail(this.email,this.password).then(data => {
      this.swalFireLogin();
      this.router.navigateByUrl('/cards')
    })
    .catch()
    ;
  }

  sendGoogleAuth():void{
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
      this.swalFireLogin();
      this.router.navigateByUrl('/cards')
    })
  }

  catchStringEmail(event:string){
    this.email = event;
  }
  catchStringPassword(event:string){
    this.password = event;
  }
  private swalFireLogin():void{
    Swal.fire({
      title:"<h5 style = 'color:white'>Successful Logged in</h5>",
      icon: 'success',
      timer:2000,
      showCancelButton: false,
      showConfirmButton: false,
      background: '#222222'
    })
  }



}
