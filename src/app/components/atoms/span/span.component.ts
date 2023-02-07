import { Component, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-span',
  templateUrl: './span.component.html',
  styleUrls: ['./span.component.scss']
})
export class SpanComponent{
  @Input() text:string ='';
  @Input() inputFormGroup?:FormGroup

}
