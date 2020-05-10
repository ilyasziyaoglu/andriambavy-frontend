import { Component, OnInit } from '@angular/core';
import {ProductModelService} from '../../services/product-model.service';

@Component({
  selector: 'ngx-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss'],
})
export class JewelryComponent implements OnInit {

  productModels: any = [];

  constructor(
      private productModelService: ProductModelService,
  ) { }

  ngOnInit() {
    this.productModelService.getLimitedEditions(productModels => this.productModels = productModels);
  }

  onFilter(filter: any) {
    this.productModelService.filterLimitedEditions(filter, results => {
      this.productModels = results;
    });
  }
}
