import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-control-form',
  templateUrl: './input-control-form.component.html',
  styleUrls: ['./input-control-form.component.scss']
})
export class InputControlFormComponent {
  @Input() inputLabelText?:string;

}
