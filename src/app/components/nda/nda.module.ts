import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NdaRoutingModule } from './nda-routing.module';
import { NdaComponent } from './nda.component';
import { NdaDetailsComponent } from './nda-details/nda-details.component';
import { NdaListingsComponent } from './nda-listings/nda-listings.component';
import { NdaCreateComponent } from './nda-create/nda-create.component';


@NgModule({
  declarations: [NdaComponent, NdaDetailsComponent, NdaListingsComponent, NdaCreateComponent],
  imports: [
    CommonModule,
    NdaRoutingModule
  ]
})
export class NdaModule { }
