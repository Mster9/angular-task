import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1', rating: 4 },
    { id: 2, name: 'Product 2', price: 200, description: 'Description 2', rating: 3 },
    { id: 3, name: 'Product 3', price: 300, description: 'Description 3', rating: 5 },
    { id: 4, name: 'Product 4', price: 400, description: 'Description 4', rating: 2 }
  ];

  getProducts(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }

  
}