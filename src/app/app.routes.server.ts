import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app.routes';
import { routesIDs } from '../shared/mocks/routes-ids';
import { PostsService } from './services/posts.service';


export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:product_id',
    renderMode: RenderMode.Prerender,
   async getPrerenderParams() {
    const dataService = inject(PostsService);
    const ids = await dataService.getProductsIds();
    return ids.map(id => ({ product_id: id }));
  }},
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
