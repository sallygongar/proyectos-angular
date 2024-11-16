import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ProductoComponent } from './components/producto/producto.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'blog', title: 'Blog', component: BlogComponent },
  { path: 'productos', title: 'Landing Productos', component: ProductoComponent },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/blog',  pathMatch: 'full' },
  { path: '**', title: 'Página no encontrada', component: Pagina404Component }
];
