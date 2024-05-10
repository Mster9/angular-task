import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  products: Product[] = [];
  chartData: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().then(products => {
      this.products = products;
      this.updateChartData();
    });
  }

  updateChartData() {
    this.chartData = this.products.map(product => ({
      name: product.name,
      value: product.price
    }));
  }

  // Add CRUD methods here
}