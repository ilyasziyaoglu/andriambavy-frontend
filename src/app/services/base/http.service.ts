import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  options: any;

  constructor(
    private http: HttpClient,
  ) {
  }

  head<T>(url: string, params?: HttpParams): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/octet-stream; charset=utf-8')
      .append('Accept', 'application/octet-stream; charset=utf-8');
    return this.http.get<any>(url, {
      params,
      responseType: 'arraybuffer' as 'json',
      observe: 'response' as 'body',
      headers,
    }).pipe(map((response: any) => {
      return response;
    }));
  }

  get<T>(url: string, headers: HttpHeaders, id?: string, params?: HttpParams): Observable<any> {
    return this.http.get<T>(url, {params, headers}).pipe(map((response: any) => {
      return response;
    }));
  }

  post<T>(url: string, body: string, headers: HttpHeaders): Observable<any> {
    return this.http.post<T>(url, body, {headers}).pipe(map((response: any) => {
      return response;
    }));
  }

  put<T>(url: string, body: string, headers: HttpHeaders): Observable<any> {
    return this.http.put<T>(url, body, {headers}).pipe(map((response: any) => {
      return response;
    }));
  }

  delete<T>(url: string, headers: HttpHeaders, id?: string): Observable<any> {
    return this.http.delete<T>(url + id, {headers}).pipe(map((response: any) => {
      return response;
    }));
  }

  httpRequest(request: Request) {
    this.doRequest(request.method, request.url, request.data, request.cb);
  }

  doRequest(method: string, url: string, req: any, cb?: any) {
    let headers;
    if (!url.startsWith('auth/')) {
      headers = new HttpHeaders()
        .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
        .append('Content-Type', 'application/json; charset=utf-8')
        .append('Accept', '*/*');
    } else {
      headers = new HttpHeaders()
        .append('Content-Type', 'application/json; charset=utf-8')
        .append('Accept', '*/*');
    }
    url = environment.baseApiUrl + url;
    let request;
    switch (method) {
      case 'get':
        request = this.get(url, headers);
        break;
      case 'post':
        request = this.post(url, req, headers);
        break;
      case 'put':
        request = this.put(url, req, headers);
        break;
      case 'delete':
        request = this.delete(url, headers);
        break;
    }
    request.subscribe(res => {
      console.info(url, req, res);
      if (res) {
        if (cb) {
          cb(res);
        }
      } else {
        console.error(res);
        Swal.fire(res.message || 'Can not get object.');
      }
    }, err => {
      console.error(err);
      Swal.fire({
        title: 'error',
        text: err.message || 'Can not get object.',
      });
    });
  }
}

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export class Request {
  public method: HttpMethod;
  public url: string;
  public data: any;
  public cb: any;

  constructor() {
  }
}
