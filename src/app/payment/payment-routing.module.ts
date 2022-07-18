import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardModule } from './credit-card/credit-card.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'credit-card',
        loadChildren: () => import('./credit-card/credit-card.module').then((module) => module.CreditCardModule),
      },
      {
        path: '',
        redirectTo: '/payment/credit-card',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
