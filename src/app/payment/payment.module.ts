import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    RouterModule
  ]
})
export class PaymentModule { }
