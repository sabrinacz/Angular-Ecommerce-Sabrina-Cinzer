import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Posts } from './posts/posts';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
     {
        path: '',
        component: Home,
    },
    {
        path: 'contact',
        component: Contact,
    },
     {
        path: 'posts',
        component: Posts,
    },
    {
        path: 'products',
        component: Products,
    },
    {
        path: 'products/:product_id',
        component: ProductDetail,
    },
];

