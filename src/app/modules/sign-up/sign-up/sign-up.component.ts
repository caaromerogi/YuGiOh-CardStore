import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

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
    private authService:AuthService
    ){
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), Validators.required]),
      confirmPassword: new FormControl(null, [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), Validators.required])
    }
    );
  }

  catchClickEventEmail():void{
    this.authService.SingUp(this.email, this.password).then(
      data=> {

        let customer:Customer ={
          id: data.user.uid,
          deck : [],
          email : data.user.email!,
          balance : 0,
          imgPath : 'https://uploads3.yugioh.com/character/3/detail/detail/yamiyugi-l.png?1371744397'
        }
        this.firestoreService.setUser(customer).then(data => console.log(data))
      }
    )
  }

  catchClickEventGoogle():void{
    this.authService.SingInWithGoogle().then(fireData => {

      let userDoc:Customer |undefined;
      this.firestoreService.getUser(fireData.user.uid).then(data => {
        if(!data){
          console.log('esto debe pasar')
        let customer:Customer ={
          id: fireData.user.uid,
          deck : [],
          email : fireData.user.email!,
          balance : 0,
          imgPath : ''
        }
        this.firestoreService.setUser(customer)
        }
        else{
          console.log(data)
        }
      })
      //TODO: Crear un behaviour subject para emitir la info del customer y mostrarla en el navbar
      this.authService.currentUser?.next({
        email:fireData.user.email!,
        id:fireData.user.uid!
      })
    })
  }
  catchStringEmail(event:string){
    this.email = event
  }
  catchStringPassword(event:string){
    this.password = event
  }
}
