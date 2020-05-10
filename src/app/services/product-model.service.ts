import { Injectable } from '@angular/core';
import {HttpMethod, HttpService} from './base/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductModelService {
  private basePath = 'product-model';

  constructor(
      private httpService: HttpService,
  ) { }

  getProductModels(cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/all`, '', cb);
  }

  getProductModelById(id, cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/${id}`, '', cb);
  }

  getLimitedEditions(cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/limited-edition`, '', cb);
  }

  filterLimitedEditions(filter, cb) {
    this.httpService.doRequest(HttpMethod.POST, `${this.basePath}/limited-edition-filter`, filter, cb);
  }

  getColorList(cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/color-list`, '', cb);
  }
}
