import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore, setDoc, doc} from '@angular/fire/firestore'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Card } from 'src/app/models/Card';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { getAuth } from 'firebase/auth';
import { arrayRemove, arrayUnion, increment, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  cards:Card[] = []
  customerData?:Customer
  customerObservable?:BehaviorSubject<Customer|null> = new BehaviorSubject<Customer|null>(null)
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

  async getCardsStatic():Promise<Card[]>{
    return await this.angularFirestore.collection<Card>('Cards').ref.get().then((col) =>{
      this.cards = []
      col.forEach(card => {
        this.cards.push(card.data())
      })
      console.log(this.cards)
      return this.cards
    })
  }

  async setUser(user:Customer){
    let userRef = collection(this.firestore, 'Customers');
    let userDoc = doc(userRef, String(user.id));
    await setDoc(userDoc, user)
  }

  getCustomerObservable(userId:string):Observable<Customer>{
    const customerDoc = this.angularFirestore.collection('Customers').doc(userId);
    return customerDoc
    .snapshotChanges()
    .pipe(
      map(customer => {
        const data = customer.payload.data() as Customer;
        return {...data}
      })
    )
  }
  async getCustomer(userId:string):Promise<Customer | undefined>{
    await this.angularFirestore.
    collection<Customer>('Customers').
    doc(userId)
    .ref
    .get()
    .then((doc) => {
      this.customerData = doc.data()
    })
    return this.customerData
  }

  async addCardToUser(cardId:string, cardPrice:number){
    let customer = doc(this.firestore, 'Customers', String(getAuth().currentUser?.uid))

    await updateDoc(customer, {
      deck: arrayUnion(
        await this.getCardById(cardId).then(async card=>{
          console.log("actualizando balance")
          await this.updateCustomerBalance(cardPrice);
          await this.updateCardMarketInventory(cardId);
          return card
        })
      )
    })

  }

  async addCardToCustomer(cardId:string, cardPrice:number){
    let customerRef = doc(this.firestore, 'Customers', String(getAuth().currentUser?.uid));

    await this.checkIfCardExistsInCustomerDeck(cardId)
    .then(async cardExists=> {
      if(cardExists){
        await this.getCardInCustomerDeck(cardId)
        .then(async card => {
          let newCard = JSON.parse(JSON.stringify(card));
          newCard.inInventory = Number(newCard.inInventory)+1;
          await this.removeCardFromUserDeck(card).then(
            async data => {
              await updateDoc(customerRef, {
                deck: arrayUnion(newCard)
              }).then(
                async data =>{
                  await this.updateCustomerBalance(cardPrice);
                  await this.updateCardMarketInventory(cardId);
                }
              )
            }
          )
        })
      }
      else{
        await updateDoc(customerRef, {
          deck: arrayUnion(await this.getCardById(cardId))
        }).then(async data =>{
          await this.updateCustomerBalance(cardPrice);
          await this.updateCardMarketInventory(cardId);
        })
      }
    })
  }

  async getCardById(cardId:string):Promise<Card>{
    return await this.angularFirestore.
    collection<Card>('Cards').
    doc(String(cardId))
    .ref
    .get()
    .then(async (doc) => {
      let card = doc.data();
      card!.inInventory = 1
      return card!
    })
  }

  async updateCustomerBalance(cardPrice:number): Promise<void>{
    await this.angularFirestore.collection<Customer>('Customers')
    .doc(getAuth().currentUser?.uid)
    .update({
      balance: increment(-cardPrice)})
  }

  async checkIfCardExistsInCustomerDeck(cardId:string):Promise<boolean>{
    return await this.angularFirestore.collection<Customer>('Customers')
    .doc(getAuth().currentUser?.uid)
    .ref
    .get()
    .then((doc) =>{
      let customerData = doc.data()
      if (customerData?.deck.find(card => card.id === cardId)){
        return true
      }else{
        return false
      }
    })
  }

  async updateCardMarketInventory(cardId:string):Promise<void>{
    await this.angularFirestore.collection<Card>('Cards')
    .doc(String(cardId))
    .update({
      inInventory: increment(-1)})
  }

  async getCardInCustomerDeck(cardId:string):Promise<Card>{
    return await this.angularFirestore.collection<Customer>('Customers')
    .doc(getAuth().currentUser?.uid)
    .ref
    .get()
    .then((doc) =>{
      let cards = doc.data()?.deck
      return cards?.find(card => card.id === cardId)!
    })
  }

  async removeCardFromUserDeck(card:Card):Promise<void>{
    let customer = doc(this.firestore, 'Customers', String(getAuth().currentUser?.uid))
    await updateDoc(customer, {
      deck: arrayRemove(card)
    })
  }

  async fundCustomerAccount(amount:number): Promise<void>{
    await this.angularFirestore.collection<Customer>('Customers')
    .doc(getAuth().currentUser?.uid)
    .update({
      balance: increment(amount)})
  }
}
