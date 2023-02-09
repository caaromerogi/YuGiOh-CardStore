import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-deck-window',
  templateUrl: './deck-window.component.html',
  styleUrls: ['./deck-window.component.scss']
})
export class DeckWindowComponent {
  @Input() currentCustomer?:Customer;
  @Input() cards?:Card[]
  @Output() emitFilterSearch:EventEmitter<string> = new EventEmitter<string>();

  page:number = 1;
  pageSize:number = 48;

  catchInput(event:string){
    this.emitFilterSearch.emit(event)
  }
}
