import { environment } from './../../environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as queryString from 'query-string';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private url(url: string) {
    return environment.apiUrl + url;
  }

  get(url: string, data: object = {}): Observable<any> {
    if (Object.keys(data).length > 0) {
      url += '?' + queryString.stringify(data);
    }
    return this.http.get(this.url(url));
  }

  post(url: string, data: object, options: object = {}): Observable<any> {
    return this.http.post(this.url(url), data, options);
  }

  patch(url: string, data: object, options: object = {}): Observable<any> {
    return this.http.patch(this.url(url), data, options);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(this.url(url));
  }

  put(url: string, data: object): Observable<any> {
    return this.http.put(this.url(url), data);
  }

  request(method: string, url: string, data: object, options: object): Observable<any> {
    const req = new HttpRequest(method, this.url(url), data, options);
    return this.http.request(req);
  }
}
