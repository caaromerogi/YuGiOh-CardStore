import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit{
  constructor(private firestoreService:FirestoreService){}
  cards?:Card[];
  page:number = 1;
  pageSize:number = 45;
  ngOnInit(): void {

    // this.firestoreService.getCards().subscribe(
    //   {
    //     next:data => this.cards = data,
    //     error: err => console.error(err)
    //   }
    // )
  }

}
