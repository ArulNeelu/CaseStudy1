import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  selected: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product A', price: 10, selected: 0 },
    { id: 2, name: 'Product B', price: 20, selected: 0 },
    { id: 3, name: 'Product C', price: 30, selected: 0 },
    { id: 4, name: 'Product D', price: 40, selected: 0 },
    { id: 5, name: 'Product E', price: 50, selected: 0 },
  ];

  private selectedProducts: Product[] = [];

  getProducts() {
    return this.products;
  }

  addToCart(product: Product, quantity: number) {
    if (product.selected + quantity >= 0) {
      product.selected += quantity;
    }
  }

  getSelectedProducts() {
    return this.selectedProducts;
  }

  setSelectedProducts(products: Product[]) {
    this.selectedProducts = products;
  }
}
