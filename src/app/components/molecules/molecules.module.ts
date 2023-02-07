import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarItemsComponent } from './navbar-items/navbar-items.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CardTooltipComponent } from './card-tooltip/card-tooltip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputControlFormComponent } from './input-control-form/input-control-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  NavbarItemsComponent,
  CardTooltipComponent,
  InputControlFormComponent],
  imports: [
    CommonModule,
    AtomsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports:[NavbarItemsComponent, CardTooltipComponent,InputControlFormComponent],
  bootstrap:[CardTooltipComponent]
})
export class MoleculesModule { }
