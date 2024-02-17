import { Routes } from '@angular/router';
import { getQueryResolver } from '../resolvers/get-query.resolver';
import { homeDetailsResolver } from '../resolvers/home-details.resolver';
import { productSpecResolver } from '../resolvers/product-spec.resolver';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { QueryViewComponent } from './components/query-view/query-view.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
    resolve: {
      productDetails: homeDetailsResolver,
    },
  },
  {
    path: 'products',
    component: AllProductsComponent,
    resolve: {
      productDetails: homeDetailsResolver,
    },
  },
  {
    path: 'queries',
    component: QueryViewComponent,
    resolve: {
      queryData: getQueryResolver,
    },
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve: {
      productDetails: productSpecResolver,
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
