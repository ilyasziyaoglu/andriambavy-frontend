import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'ngx-limited-edition',
  templateUrl: './limited-edition.component.html',
  styleUrls: ['./limited-edition.component.scss'],
})
export class LimitedEditionComponent implements OnInit {

  products: any = [];

  constructor(
    private productService: ProductService,
    ) { }

  ngOnInit() {
    this.productService.getProducts(products => this.products = products);
  }

}
