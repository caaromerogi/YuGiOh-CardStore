import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  ngOnInit(): void {
    this.getControlName()
  }

  @Output() inputString:EventEmitter<string> = new EventEmitter();
  @Input() inputPlaceholder:string ='';
  @Input() inputType:string = 'text';
  @Input() inputFormControl!:AbstractControl
  @Input() inputFormGroup!:FormGroup;
  @Input() isFieldInvalid?:boolean;
  formControlName!:string|null;
  stringToEmit:string = '';

  getControlName(): void{
    let formGroup = this.inputFormControl["_parent"].controls;
    this.formControlName = Object.keys(formGroup).find(name => this.inputFormControl === formGroup[name]) || null
    if(this.formControlName === 'confirmPassword'){
      this.inputFormGroup.addValidators([this.passwordMatchValidator])
    }
  }

  passwordMatchValidator(fg: AbstractControl){
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notmatched: true}
  }

  emitString(){
    this.inputString.emit(this.stringToEmit)
  }

}
