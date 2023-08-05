
// import { AuthService } from './../../auth/services/auth.service';
// import { Injectable } from '@angular/core';

// import { AuthService } from './../../auth/services/auth.service'
// import { Injectable } from '@angular/core'

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, throwError } from 'rxjs'
import { AuthService } from '../../auth/services/auth.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // dddd

      }
      const error = err.error.message || err.statusText
      return throwError(error)
    }))
  }
}
