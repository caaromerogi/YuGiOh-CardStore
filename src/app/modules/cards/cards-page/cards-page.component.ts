import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { filter, map } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { Customer } from 'src/app/models/Customer';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit{
  constructor(private firestoreService:FirestoreService,
    private router:Router){}
  cards:Card[] = [];
  currentCustomer?:Customer;

  ngOnInit(): void {
    this.firestoreService.getCustomerObservable(getAuth().currentUser?.uid!).subscribe({
      next: customer => this.currentCustomer = customer,
      error: err => console.log(err)
    })
    // this.firestoreService.getCardsStatic().then(data => this.cards = data);
    this.firestoreService.getCards()
    .pipe(
      map(cards => {
        return cards.filter(card => card.inInventory > 0)
      })
    )
    .subscribe(
      {
        next:data =>{
          this.cards =[]
          this.cards = data
        },
        error: err => console.error(err)
      }
    )
  }

  async buyCard(cardId:string, cardPrice:number):Promise<void>{
    await this.firestoreService.addCardToCustomer(cardId, cardPrice)
  }

  getCards():void{
    this.firestoreService.getCards().subscribe(
      {
        next:data =>{
          this.cards =[]
          this.cards = data
        },
        error: err => console.error(err)
      }
    )
  }

  swalFireAcceptPurchase(card:Card):void{
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: card.name,
      html: "<p>Do tou want to buy this card?</p>",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
      imageUrl: card.card_images[0].image_url,
      imageWidth: 300,
      allowOutsideClick:false,
      background:'#222222',

    }).then(async (result) => {
      if (result.isConfirmed &&
        getAuth().currentUser?.uid &&
        this.currentCustomer?.balance! > card.card_prices[0].ebay_price)
        {
        await this.buyCard(card.id, card.card_prices[0].ebay_price)
        .then(data =>{
          swalWithBootstrapButtons.fire({
            title: 'Successful purchase!',
            text:'You can see the card in deck',
            icon:'success',
            background:'#222222',
            timer:1500,
            showConfirmButton:false
          }
          )
        })
        .catch(err => {
          console.log(err)
        })
      }
      else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelled',
          text: "You didn't purchase the card",
          icon: 'error',
          background: '#222222',
          timer:1500,
          showConfirmButton:false
        })
      }
      else if (!getAuth().currentUser?.uid){
        this.router.navigateByUrl('/login')
      }else if(this.currentCustomer?.balance! < card.card_prices[0].ebay_price){
        this.swalNotEnoughMoney();
      }
    })
  }

  swalNotEnoughMoney():void{
    Swal.fire({
      title: "Oops!",
      text: "You don't have enough money for this card",
      icon: "error",
      background:'#222222',
      showConfirmButton:false,
      timer:2500
    })
  }
  catchPurchaseProcess(event:Card):void{
    this.swalFireAcceptPurchase(event)
  }

  catchFilterSearch(event:string):void{
    this.firestoreService.getCards().pipe(
      map(cards => {
        return cards.filter(card => {
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
