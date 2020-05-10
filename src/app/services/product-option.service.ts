import { Injectable } from '@angular/core';
import {HttpMethod, HttpService} from './base/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductOptionService {
  private basePath = 'product-option';

  constructor(
      private httpService: HttpService,
  ) { }

  getProductOptions(cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/all`, '', cb);
  }

  getProductOptionById(id, cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/${id}`, '', cb);
  }
}
