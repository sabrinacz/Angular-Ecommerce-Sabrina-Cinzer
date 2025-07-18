import { RenderMode, ServerRoute  } from '@angular/ssr';
import { inject } from '@angular/core';
import { ProductsService } from './services/products.service';


export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
  {
    path: 'products/:product_id',
    renderMode: RenderMode.Server,
  }
];
