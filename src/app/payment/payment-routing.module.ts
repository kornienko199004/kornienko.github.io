import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    children: [
      {
        path: 'credit-card',
        loadChildren: () => import('./credit-card/credit-card.module').then((module) => module.CreditCardModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
