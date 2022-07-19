import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTypeChangerDirective } from './input-type-changer.directive';


@NgModule({
  declarations: [
    CreditCardComponent,
    InputTypeChangerDirective
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CreditCardModule { }
