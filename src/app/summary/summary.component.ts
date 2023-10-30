import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  products: Product[] = this.productService.getSelectedProducts();

  constructor(private router: Router, private productService: ProductService) {}

  getTotalPrice() {
    return this.products.reduce((total, product) => total + (product.price * product.selected), 0);
  }

  confirmOrder() {
    // Implement order confirmation logic here
  }
}
