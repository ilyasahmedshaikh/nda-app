import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NdaComponent } from './nda.component';
import { NdaListingsComponent } from './nda-listings/nda-listings.component';
import { NdaDetailsComponent } from './nda-details/nda-details.component';
import { NdaCreateComponent } from './nda-create/nda-create.component';

const routes: Routes = [
  {
    path: '',
    component: NdaComponent
  },
  {
    path: 'nda',
    component: NdaComponent
  },
  {
    path: 'nda-listings',
    component: NdaListingsComponent
  },
  {
    path: 'nda-details',
    component: NdaDetailsComponent
  },
  {
    path: 'nda-create',
    component: NdaCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NdaRoutingModule { }
