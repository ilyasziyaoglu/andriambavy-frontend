import { NgModule } from '@angular/core';
import {NbCardModule, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {DesignModule} from './design/design.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {BasketModule} from './basket/basket.module';
import { LimitedEditionComponent } from './limited-edition/limited-edition.component';
import {CatalogModule} from './catalog/catalog.module';
import { JewelryComponent } from './jewelry/jewelry.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        DesignModule,
        BasketModule,
        NbCardModule,
        CatalogModule
    ],
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    LimitedEditionComponent,
    JewelryComponent,
  ],
})
export class PagesModule {
}
