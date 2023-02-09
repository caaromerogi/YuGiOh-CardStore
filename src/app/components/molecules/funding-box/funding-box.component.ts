import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-funding-box',
  templateUrl: './funding-box.component.html',
  styleUrls: ['./funding-box.component.scss']
})
export class FundingBoxComponent {
  @Input() inputFormGroup?:FormGroup;
  min:number = 1;
  max:number = 200;
  amount:number = 0
  inputText:string = '';
  @Output() fundClick:EventEmitter<number> = new EventEmitter<number>();

  fundAccount():void{
    this.fundClick.emit(this.amount);
    this.inputText = ''
  }

  catchInput(event:string){
    this.amount = Number(event)
  }
}
