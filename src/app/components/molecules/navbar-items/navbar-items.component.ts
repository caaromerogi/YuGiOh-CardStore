import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { Customer } from 'src/app/models/Customer';
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

  @Input() currentUser?:FirebaseUser|null
  @Input() currentCustomer?:Customer;

  @Output() signOutEmitter:EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  signOut():void{
    this.signOutEmitter.emit()
  }


  Number(obj:any):number{
    return Number(obj)
  }
}
