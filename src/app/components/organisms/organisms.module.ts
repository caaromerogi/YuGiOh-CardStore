import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    RegisterFormComponent,
    LoginFormComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[NavbarComponent,
  RegisterFormComponent,
  LoginFormComponent]
})
export class OrganismsModule { }
