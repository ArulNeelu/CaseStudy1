import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = this.productService.getProducts();

  constructor(private router: Router, private productService: ProductService) {}

  addToCart(product: Product, quantity: number) {
    if (product.selected + quantity >= 0) {
      product.selected += quantity;
    }
  }

  goToReview() {
    const selectedProducts = this.products.filter(product => product.selected > 0);
    if (selectedProducts.length > 0) {
      this.productService.setSelectedProducts(selectedProducts);
      this.router.navigate(['/review']);
    } else {
      alert('Select at least one product to proceed.');
    }
  }
}
