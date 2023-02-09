import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckRoutingModule } from './deck-routing.module';
import { DeckViewComponent } from './deck-view/deck-view.component';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';


@NgModule({
  declarations: [
    DeckViewComponent
  ],
  imports: [
    CommonModule,
    DeckRoutingModule,
    OrganismsModule,
    NgbModule
  ]
})
export class DeckModule { }
