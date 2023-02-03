import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { GoogleAuthProvider, User, UserCredential } from 'firebase/auth';

import { BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData?:Observable<firebase.default.User|null>;
  constructor(private authService:AngularFireAuth) {
  }

  SingUp(email:string, password:string):void{
    this.authService.createUserWithEmailAndPassword(email,password)
    .then(data =>console.log("Successful registration"))
    .catch(err => console.error(err))
  }

  async SignInWithEmail(email:string, password:string):Promise<Observable<firebase.default.User|null>>{
    await this.authService.signInWithEmailAndPassword(email, password)
    .then(data => this.userData = of(data.user))
    console.log(this.userData)
    return this.userData!;

  }
  async SingInWithGoogle():Promise<UserCredential>{
    return await this.authService.signInWithPopup(new GoogleAuthProvider())
    .then();
  }
  signOut():void{
    this.authService.signOut().then(data => console.log(data));
  }
}
