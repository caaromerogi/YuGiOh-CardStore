import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { FirebaseUser } from 'src/app/models/FirebaseUser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-navbar-items',
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.scss']
})
export class NavbarItemsComponent implements OnInit{
  constructor(
    private authService:AuthService,
    private firestoreService:FirestoreService){
  }

  currentUser?:FirebaseUser|null

  ngOnInit(): void {
    this.getCurrentUserInf()
  }

  signOut():void{
    this.authService.signOut()
  }

  getCurrentUserInf(){
    getAuth().onAuthStateChanged((user) =>{
      let email = user?.email ?? null;
      let id = user?.uid!;
      this.currentUser = {id,email}
    })
  }

}
