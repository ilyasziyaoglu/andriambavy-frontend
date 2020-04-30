import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './catalog.component';
import {DetailComponent} from './detail/detail.component';
import {LimitedEditionComponent} from './limited-edition/limited-edition.component';
import {JewelryComponent} from './jewelry/jewelry.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: 'limited-edition',
        component: LimitedEditionComponent,
      },
      {
        path: 'jewelry',
        component: JewelryComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule { }
