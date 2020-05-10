import { Component, OnInit } from '@angular/core';
import {ProductModelService} from '../../services/product-model.service';

@Component({
  selector: 'ngx-limited-edition',
  templateUrl: './limited-edition.component.html',
  styleUrls: ['./limited-edition.component.scss'],
})
export class LimitedEditionComponent implements OnInit {

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
