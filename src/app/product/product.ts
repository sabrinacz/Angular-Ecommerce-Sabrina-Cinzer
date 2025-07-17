import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  standalone: true,
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})

export class Product {
  @Input() title: string = "";
  @Input() price = 0;
}