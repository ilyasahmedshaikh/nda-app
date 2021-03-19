import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { AddCreditsComponent } from './add-credits/add-credits.component';
import { AddCardComponent } from '../payment/add-card/add-card.component';
import { PaymentMethodComponent } from '../payment/payment-method/payment-method.component';


@NgModule({
  declarations: [PaymentComponent, AddCreditsComponent, AddCardComponent, PaymentMethodComponent ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
