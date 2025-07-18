import { Component } from '@angular/core';
import { Products } from '../products/products';
import { ProductsService, ProductInterface } from '../services/products.service';


@Component({
  selector: 'app-home',
  imports: [Products],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  products: ProductInterface[] = [];
  loading: boolean = true;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;   
        this.loading = false;      
      },
      error: (error) => {
        console.error('Error obteniendo productos', error);
        this.loading = false;        
      }
    });
  }
}