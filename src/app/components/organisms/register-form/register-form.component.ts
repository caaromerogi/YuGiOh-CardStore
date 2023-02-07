import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Input() formGroupInput!:FormGroup;
  @Input() inputFormControlEmail!:AbstractControl
  @Input() inputFormControlPassword!:AbstractControl;
  @Input() inputFormControlRepeatPassword!:AbstractControl;

  @Output() passwordEmitter:EventEmitter<string> = new EventEmitter();
  @Output() emailEmitter:EventEmitter<string> = new EventEmitter();
  @Output() signUpWithEmail:EventEmitter<string> = new EventEmitter();
  @Output() signUpWithGoogle:EventEmitter<string> = new EventEmitter();

  text?:string = 'Sign up'
  catchStringEmail(event:string):void{
    this.emailEmitter.emit(event);
  }

  catchStringPassword(event:string):void{
    this.passwordEmitter.emit(event);
  }

  emitClick(): void {
    this.signUpWithEmail.emit();
  }

  emitClickGoogle():void{
    this.signUpWithGoogle.emit();
  }
}


