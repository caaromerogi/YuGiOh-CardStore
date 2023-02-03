import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { RegisterFormComponent } from './register-form/register-form.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RegisterFormComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ],
  exports:[NavbarComponent,
  RegisterFormComponent]
})
export class OrganismsModule { }
