import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore, setDoc, doc} from '@angular/fire/firestore'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Card } from 'src/app/models/Card';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:Firestore, private angularFirestore:AngularFirestore) {

  }
  async setCards(card:Card):Promise<void>{
    let cardsRef = collection(this.firestore, 'Cards');
    let cardRef = doc(cardsRef, String(card.id));
    await setDoc(cardRef,card);
  }

  getCards():Observable<Card[]>{
    return this.angularFirestore.collection<Card>('Cards').snapshotChanges().pipe(
      map(
        actions =>{
          return actions.map(u => {
            const card = u.payload.doc;
            return {...card.data()} as Card
          })
        }
      )
    )
  }
}
