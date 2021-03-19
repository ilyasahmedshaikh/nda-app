import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './payment.component';
import { AddCreditsComponent } from '../payment/add-credits/add-credits.component';
import { AddCardComponent } from '../payment/add-card/add-card.component';
import { PaymentMethodComponent } from '../payment/payment-method/payment-method.component';


const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'add-credits',
    component: AddCreditsComponent
  },
  {
    path: 'add-card',
    component: AddCardComponent
  },
  {
    path: 'payment-method',
    component: PaymentMethodComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
