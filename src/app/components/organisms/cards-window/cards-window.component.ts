import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, PipeTransform } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-cards-window',
  templateUrl: './cards-window.component.html',
  styleUrls: ['./cards-window.component.scss']
})
export class CardsWindowComponent {


  @Input() cards?:Card[]
  @Output() emitPurchaseProcess:EventEmitter<Card> = new EventEmitter<Card>();
  @Output() emitFilterSearch:EventEmitter<string> = new EventEmitter<string>();
  @Input() page:number = 1;
  @Input() pageSize:number = 48;
  emitPurchaseProcessClick(item:Card):void{
    this.emitPurchaseProcess.emit(item)
  }

  search(text:string):void{
    this.cards = this.cards?.filter((card) => {
      const term = text.toLocaleLowerCase();
      return card.name.toLocaleLowerCase().includes(term)
    })
    console.log(this.cards)
  }

  catchInput(event:string){
    this.emitFilterSearch.emit(event)
  }
}
