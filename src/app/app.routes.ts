import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '**',
        component: Home,
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'contact',
        component: Contact,
    }
];

