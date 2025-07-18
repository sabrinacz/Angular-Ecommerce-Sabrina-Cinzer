import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  final_price: number;
  discount: number;
  img: string;
  installments: number;
  is_same_price_with_installments: boolean;
  free_shipping: boolean;
  free_shipping_date: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }
  
  private productsURL = "/products.json";

  getProducts () : Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.productsURL);  
  }

  getProductById(id: number): Observable<ProductInterface | undefined> {
    /* método pipe nos permite trabajar sobre el retorno de un observable */
    return this.http.get<ProductInterface[]>(this.productsURL).pipe(
      map(products => products.find(product => product.id === id)
    ));  ;
  }
}
