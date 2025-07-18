import { RenderMode, ServerRoute } from '@angular/ssr';
import { inject } from '@angular/core';
import { ProductsService } from './services/products.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products/:product_id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const productsService = inject(ProductsService);
      const products = await firstValueFrom(productsService.getProducts());
      return products.map(product => ({ product_id: product.id.toString() }));
    }
  }
];
