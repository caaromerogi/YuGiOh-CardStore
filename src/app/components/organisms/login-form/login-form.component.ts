import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() formGroupInput!:FormGroup;
  @Input() inputFormControlEmail!:AbstractControl;
  @Input() inputFormControlPassword!:AbstractControl;

  @Output() passwordEmitter:EventEmitter<string> = new EventEmitter();
  @Output() emailEmitter:EventEmitter<string> = new EventEmitter();
  @Output() signInWithEmail:EventEmitter<void> = new EventEmitter();
  @Output() signInWithGoogle:EventEmitter<void> = new EventEmitter();

  catchStringEmail(event:string){
    this.emailEmitter.emit(event)
  }

  catchStringPassword(event:string){
    this.passwordEmitter.emit(event)
  }

  emitClick(): void {
    this.signInWithEmail.emit();
  }

  emitClickGoogle():void{
    this.signInWithGoogle.emit();
  }
}
