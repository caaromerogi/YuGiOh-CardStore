import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-funding-view',
  templateUrl: './funding-view.component.html',
  styleUrls: ['./funding-view.component.scss']
})
export class FundingViewComponent {
  @Input() inputFormGroup?:FormGroup
  @Output() fundClick:EventEmitter<number> = new EventEmitter<number>();

  catchFundClick(event:number):void{
    this.fundClick.emit(event);
  }
}
