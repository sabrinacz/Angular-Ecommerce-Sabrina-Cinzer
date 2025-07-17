import { Component } from '@angular/core';
import { Product } from '../product/product';


@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {constructor() {
    console.log('Home component loaded');
  }
  products = [
    { id: 1, title: 'Producto 1', price: 100 }, 
    { id: 2, title: 'Producto 2', price: 200 },
    { id: 3, title: 'Producto 3', price: 300 },
    { id: 4, title: 'Producto 4', price: 400 },
    { id: 5, title: 'Producto 5', price: 500 },
  ]
}
