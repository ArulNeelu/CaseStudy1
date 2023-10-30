import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedPaymentOption: string = '';

  constructor(private router: Router, private productService: ProductService) {}

  get products() {
    return this.productService.getSelectedProducts();
  }

  selectPaymentOption(option: string) {
    this.selectedPaymentOption = option;
  }

  submitPayment() {
    if (this.selectedPaymentOption) {
      alert('Selected payment method is: ' + this.selectedPaymentOption);
      this.router.navigate(['/summary']);
    } else {
      alert('Please select a payment option.');
    }
  }
}
