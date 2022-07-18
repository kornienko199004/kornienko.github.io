import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  public form = new FormGroup({
    'card-number': new FormControl(),
    cvv: new FormControl(),
  });

  public submit(): void {
    console.log(this.form.value);
  }
}
