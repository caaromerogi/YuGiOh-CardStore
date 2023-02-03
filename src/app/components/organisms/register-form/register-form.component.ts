import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  @Input() inputFormControlEmail?:FormControl;
  @Input() inputFormControlPassword?:FormControl;
  @Input() inputFormControlRepeatPassword?:FormControl;
  text?:string = 'Sign up'
}
