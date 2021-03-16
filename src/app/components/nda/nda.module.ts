import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NdaRoutingModule } from './nda-routing.module';
import { NdaComponent } from './nda.component';
import { NdaDetailsComponent } from './nda-details/nda-details.component';
import { NdaListingsComponent } from './nda-listings/nda-listings.component';
import { NdaCreateComponent } from './nda-create/nda-create.component';
import { GeneralInfoComponent } from './nda-create/general-info/general-info.component';
import { DigitalSignatureComponent } from './nda-create/digital-signature/digital-signature.component';
import { NextStepComponent } from './nda-create/next-step/next-step.component';


@NgModule({
  declarations: [NdaComponent, NdaDetailsComponent, NdaListingsComponent, NdaCreateComponent, GeneralInfoComponent, DigitalSignatureComponent, NextStepComponent],
  imports: [
    CommonModule,
    NdaRoutingModule
  ]
})
export class NdaModule { }
