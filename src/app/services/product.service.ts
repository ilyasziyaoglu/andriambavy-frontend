import { Injectable } from '@angular/core';
import {HttpMethod, HttpService} from './base/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private basePath = 'product';

  constructor(
    private httpService: HttpService,
  ) { }

  getProducts(cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/all`, '', cb);
  }

  getProductById(id, cb) {
    this.httpService.doRequest(HttpMethod.GET, `${this.basePath}/${id}`, '', cb);
  }
}
