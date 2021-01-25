import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  url = 'http://localhost:3000/app';
  token = '';
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      url: this.url + request.url,
      setHeaders: {
        // Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(request);
  }
}
