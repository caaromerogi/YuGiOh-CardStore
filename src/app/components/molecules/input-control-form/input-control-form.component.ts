import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-control-form',
  templateUrl: './input-control-form.component.html',
  styleUrls: ['./input-control-form.component.scss']
})
export class InputControlFormComponent{



  @Input() inputLabelText?:string;
  @Input() inputType:string = 'text';
  @Input() inputFormControl!:AbstractControl
  @Input() inputFormGroup!:FormGroup;
  @Input() inputText!:string;
  @Input() isFieldInvalid!:boolean;
  @Output() inputString:EventEmitter<string> = new EventEmitter();

  catchString(event:string){
    this.inputString.emit(event);
  }


}
