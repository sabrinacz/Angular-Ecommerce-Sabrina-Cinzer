import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app.routes';
import { routesIDs } from '../shared/mocks/routes-ids';


export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:product_id',
    renderMode: RenderMode.Prerender,
   async getPrerenderParams() {
      const ids = routesIDs;
      return ids.map(id => ({ id }));
  }},
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
