import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AItemComponent } from './a-item/a-item.component';
import { RoundedImgComponent } from './rounded-img/rounded-img.component';
import { LogoImgComponent } from './logo-img/logo-img.component';
import { TitleComponent } from './title/title.component';
import { IconInputTextComponent } from './icon-input-text/icon-input-text.component';
import { H6TitleComponent } from './h6-title/h6-title.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { RouterModule } from '@angular/router';
import { InputTextComponent } from './input-text/input-text.component';
import { LabelComponent } from './label/label.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpanComponent } from './span/span.component';
import { ButtonComponent } from './button/button.component';
import { InputNoValidationComponent } from './input-no-validation/input-no-validation.component';



@NgModule({
  declarations: [
    AItemComponent,
    RoundedImgComponent,
    LogoImgComponent,
    TitleComponent,
    IconInputTextComponent,
    H6TitleComponent,
    ParagraphComponent,
    InputTextComponent,
    LabelComponent,
    SpanComponent,
    ButtonComponent,
    InputNoValidationComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AItemComponent,
    RoundedImgComponent,
    LogoImgComponent,
    TitleComponent,
    IconInputTextComponent,
    H6TitleComponent,
    ParagraphComponent,
    InputTextComponent,
    LabelComponent,
    SpanComponent,
    ButtonComponent,
    InputNoValidationComponent]
})
export class AtomsModule { }
