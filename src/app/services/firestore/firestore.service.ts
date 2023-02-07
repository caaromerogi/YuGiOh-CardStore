import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore, setDoc, doc} from '@angular/fire/firestore'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Card } from 'src/app/models/Card';
import { map, Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  customerData?:Customer
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

  async setUser(user:Customer){
    let userRef = collection(this.firestore, 'Customers');
    let userDoc = doc(userRef, String(user.id));
    await setDoc(userDoc, user)
  }

  async getUser(userId:string):Promise<Customer | undefined>{
    await this.angularFirestore.
    collection<Customer>('Customers').
    doc(userId)
    .ref
    .get()
    .then((doc) => {
      console.log(doc.data())
      this.customerData = doc.data()
      console.log(this.customerData)
    })
    return this.customerData
  }

}
