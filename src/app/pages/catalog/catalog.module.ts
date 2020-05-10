import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogComponent} from './catalog.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbIconModule, NbInputModule, NbListModule,
    NbRadioModule,
    NbSelectModule,
} from '@nebular/theme';
import {FilterComponent} from './filter/filter.component';
import {MatSliderModule} from '@angular/material/slider';
import {DetailComponent} from './detail/detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [CatalogComponent, ProductCardComponent, FilterComponent, DetailComponent],
    imports: [
        CommonModule,
        NbCardModule,
        NbIconModule,
        NbSelectModule,
        MatSliderModule,
        NbRadioModule,
        NbButtonModule,
        NbContextMenuModule,
        FormsModule,
        NbListModule,
        NbInputModule,
        RouterModule
    ],
    exports: [
        ProductCardComponent,
        FilterComponent,
    ],
})
export class CatalogModule {
}
