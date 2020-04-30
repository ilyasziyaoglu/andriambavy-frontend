import { Injectable } from '@angular/core';
import {HttpMethod, HttpService} from './base/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  basePath = '/user';

  constructor(
    private httpService: HttpService,
  ) { }

}
