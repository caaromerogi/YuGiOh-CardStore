import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundingRoutingModule } from './funding-routing.module';
import { FundComponent } from './fund/fund.component';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';


@NgModule({
  declarations: [
    FundComponent
  ],
  imports: [
    CommonModule,
    FundingRoutingModule,
    OrganismsModule
  ]
})
export class FundingModule { }
