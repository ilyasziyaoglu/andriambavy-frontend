import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from '../catalog/detail/detail.component';
import {LimitedEditionComponent} from './limited-edition.component';

const routes: Routes = [
  {
    path: '',
    component: LimitedEditionComponent,
    children: [
      {
        path: 'detail/:id/:productId',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimitedEditionRoutingModule { }
