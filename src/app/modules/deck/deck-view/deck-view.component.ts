import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { map } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { Customer } from 'src/app/models/Customer';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.scss']
})
export class DeckViewComponent implements OnInit{
  constructor(private firestoreService:FirestoreService){}
  currentCustomer?:Customer;
  cards?:Card[]
  page:number = 1;
  pageSize:number = 48;
  ngOnInit(): void {
    this.firestoreService.getCustomerObservable(getAuth().currentUser?.uid!).subscribe({
        next: customer => {
          this.currentCustomer = customer;
          this.cards = customer.deck
        },
        error: err => console.log(err)
      })
  }
  catchFilterSearch(event:string):void{
    this.firestoreService.getCustomerObservable(getAuth().currentUser?.uid!).pipe(
      map(customer => {
        return customer.deck.filter(card => {
          const term = event.toLocaleLowerCase();
          return card.name.toLocaleLowerCase().includes(term);
        })
      })
    )
    .subscribe(
      cardsFilter => {
        this.cards = cardsFilter
        console.log(this.cards)}

    )
  }
}
