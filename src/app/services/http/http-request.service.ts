import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FirestoreService } from '../firestore/firestore.service';
import { Card } from 'src/app/models/Card';
import { map } from 'rxjs';
import { Data } from 'src/app/models/Data';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(
    private httpClient:HttpClient,
    private firestore:FirestoreService
    ) { }

  yugiohAPIHost = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  cards?:Card[];
  addCards():void{
    this.httpClient.get<Data>('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .subscribe({
      next:data => {
        this.cards = data.data.splice(0,200)
        this.cards.forEach(async card => {
          card.inInventory = 5
          card.lastOwners = []
          card.currentOwner = null;
          await this.firestore.setCards(card)
          return card
        })
      },
      error:err=> console.error(err)
    })
    console.log(this.cards)
    /*
    .subscribe({
      next: cards => {
        cards.forEach(card => {
          card.inInventory = 5
        })
      }
    })*/

  }

}
