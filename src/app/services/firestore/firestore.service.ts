import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore, setDoc, doc} from '@angular/fire/firestore'

import { Card } from 'src/app/models/Card';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:Firestore) {
  }
  async setCards(card:Card):Promise<void>{
    let cardsRef = collection(this.firestore, 'Cards');
    let cardRef = doc(cardsRef,String(card.id));
    await setDoc(cardRef,card);

  }
}
