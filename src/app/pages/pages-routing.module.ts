import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {DesignComponent} from './design/design.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {BasketComponent} from './basket/basket.component';
import {LimitedEditionComponent} from './limited-edition/limited-edition.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'limited-edition',
      component: LimitedEditionComponent,
    },
    {
      path: 'jewelry',
      component: LimitedEditionComponent,
    },
    {
      path: 'design',
      component: DesignComponent,
    },
    {
      path: 'basket',
      component: BasketComponent,
    },
    {
      path: 'shop',
      loadChildren: () => import('./catalog/catalog.module')
        .then(m => m.CatalogModule),
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
