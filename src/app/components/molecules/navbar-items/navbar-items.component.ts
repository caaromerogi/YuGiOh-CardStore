import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'firebase/auth';
import { FirebaseUser } from 'src/app/models/FirebaseUser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-navbar-items',
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.scss']
})
export class NavbarItemsComponent implements OnInit{
  constructor(private authService:AuthService, private firestoreService:FirestoreService){
  }

  currentUser!:FirebaseUser;
  ngOnInit(): void {
    this.authService.currentUser?.asObservable().subscribe(data=> {
      this.currentUser = data

    })

  }


}
