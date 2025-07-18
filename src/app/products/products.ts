import { Component, inject } from '@angular/core';
import { ProductInterface } from '../services/products.service';
import { ProductsService } from '../services/products.service'; 
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products : ProductInterface[] = [];
  loading : boolean = true;
  productsService = inject(ProductsService);
  ngOnInit() {
    const products_observable = this.productsService.getProducts();
    products_observable.subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error obteniendo productos:', error);
        this.loading = false;
      }
    });
  }
}
