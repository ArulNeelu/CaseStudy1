import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  constructor(private router: Router, private productService: ProductService) {}

  get products() {
    return this.productService.getSelectedProducts();
  }

  editProduct() {
    this.router.navigate(['/product']);
  }

  deleteProduct(product: Product) {
    this.productService.addToCart(product, -product.selected);
  }

  goToPayment() {
    if (this.products.length > 0) {
      this.router.navigate(['/payment']);
    } else {
      alert('Select at least one product to proceed.');
    }
  }
}
