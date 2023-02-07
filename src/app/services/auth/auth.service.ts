import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { GoogleAuthProvider, User, UserCredential } from 'firebase/auth';

import { BehaviorSubject, Observable, of} from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { FirebaseUser } from 'src/app/models/FirebaseUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  initialUser:FirebaseUser ={
    email:"",
    id:""
  }
  userData?:Observable<firebase.default.User|null>;
  customerData?:Observable<Customer>
  currentUser:BehaviorSubject<FirebaseUser> = new BehaviorSubject(this.initialUser);
  constructor(private authService:AngularFireAuth) {
  }

  async SingUp(email:string, password:string):Promise<UserCredential>{
    return await this.authService.createUserWithEmailAndPassword(email,password).then()

    // .then(data =>console.log("Successful registration"))
    // .catch(err => console.error(err))
  }

  async SignInWithEmail(email:string, password:string):Promise<Observable<firebase.default.User|null>>{
    await this.authService.signInWithEmailAndPassword(email, password)
    .then(data => {
      if(data){
        this.currentUser?.next({
          id : data.user!.uid,
          email : data.user!.email!,
        });
      }
    })

    return this.userData!;

  }
  async SingInWithGoogle():Promise<UserCredential>{
    return await this.authService.signInWithPopup(new GoogleAuthProvider()).then()
  }
  signOut():void{
    this.authService.signOut().then(data => console.log(data));
  }

  isAuthenticated():Observable<FirebaseUser|null>{
    let auth = getAuth();
    let user = auth.currentUser;
    let email = user!.email;
    let id = user!.uid;
    this.currentUser!.next({
      email: email,
      id: id
    })
    return this.currentUser!.asObservable();
  }


}
