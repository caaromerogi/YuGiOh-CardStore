import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { Customer } from 'src/app/models/Customer';
import { FirebaseUser } from 'src/app/models/FirebaseUser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(
    private firestoreService:FirestoreService,
    private authService:AuthService){}

  ngOnInit(): void {
    this.getCurrentUserInf()
  }

  currentUser?:FirebaseUser|null
  currentCustomer?:Customer;

  getCurrentUserInf():void{
    getAuth().onAuthStateChanged((user) =>{
      let email = user?.email ?? null;
      let id = user?.uid!;
      this.currentUser = {id,email}
      if(this.currentUser.email !==null){
        this.firestoreService.getCustomerObservable(id).subscribe(
          {
            next: cust => this.currentCustomer =cust,
            error: err => console.log(err)
          }
        )
      }
    })
  }

  catchSignOut():void{
    this.authService.signOut()
  }

}
