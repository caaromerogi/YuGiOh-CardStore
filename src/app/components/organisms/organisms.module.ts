import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FundingViewComponent } from './funding-view/funding-view.component';
import { CardsWindowComponent } from './cards-window/cards-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeckWindowComponent } from './deck-window/deck-window.component';
import { EndFooterComponent } from './end-footer/end-footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FundingViewComponent,
    CardsWindowComponent,
    DeckWindowComponent,
    EndFooterComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports:[NavbarComponent,
  RegisterFormComponent,
  LoginFormComponent,
  FundingViewComponent,
  CardsWindowComponent,
  DeckWindowComponent,
  EndFooterComponent]
})
export class OrganismsModule { }
