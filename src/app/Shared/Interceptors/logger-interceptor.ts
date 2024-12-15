// src/app/interceptors/logger.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP Request:', {
      url: req.url,
      method: req.method,
      body: req.body
    });

    // Proceed with the request and log the response
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('HTTP Response:', {
              url: event.url,
              status: event.status,
              body: event.body
            });
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            console.error('HTTP Error:', {
              url: error.url,
              status: error.status,
              message: error.message
            });
          }
        }
      )
    );
  }
}
