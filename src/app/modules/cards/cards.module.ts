import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CardsPageComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MoleculesModule,
    OrganismsModule,
    NgbModule
  ],
  providers:[

  ]
})
export class CardsModule { }
