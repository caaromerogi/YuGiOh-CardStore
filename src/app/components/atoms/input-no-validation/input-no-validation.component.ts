import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-no-validation',
  templateUrl: './input-no-validation.component.html',
  styleUrls: ['./input-no-validation.component.scss']
})
export class InputNoValidationComponent {
  stringToEmit:string = '';
  @Output() inputString:EventEmitter<string> = new EventEmitter();
  @Input() inputType?:string;
  @Input() inputClass?:string;
  @Input() inputPlaceholder?:string;
  emitString(){
    this.inputString.emit(this.stringToEmit)
  }
}
