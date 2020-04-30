import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {NbCardModule, NbIconModule, NbRadioModule, NbSelectModule} from '@nebular/theme';
import { FilterComponent } from './filter/filter.component';
import {MatSliderModule} from '@angular/material/slider';
import { DetailComponent } from './detail/detail.component';
import { LimitedEditionComponent } from './limited-edition/limited-edition.component';
import { JewelryComponent } from './jewelry/jewelry.component';

@NgModule({
  declarations: [CatalogComponent, ProductCardComponent, FilterComponent, DetailComponent, LimitedEditionComponent, JewelryComponent],
	imports: [
		CommonModule,
		CatalogRoutingModule,
		NbCardModule,
		NbIconModule,
		NbSelectModule,
		MatSliderModule,
		NbRadioModule,
	],
})
export class CatalogModule { }
