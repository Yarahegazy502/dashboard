import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { keys } from '../TS Files/localstorage-key';

@Injectable()
export class RequestLogInterceptor implements HttpInterceptor {
  browserLang: any;

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let header: any = {};

    //SET DESIRED RESPONSE LANGUAG
    if (window.localStorage.getItem(keys.language)) {
      header["lang"] = window.localStorage.getItem(keys.language);
    } else {
      this.browserLang = this.translate.getBrowserLang();
      window.localStorage.setItem(keys.language, this.browserLang);
      header["lang"] = window.localStorage.getItem(keys.language);
    }

    //SET AUTHORIZATION TOKEN IF LOGGED
    let user = JSON.parse(window.localStorage.getItem(keys.userData) || "{}");
    this.authService.isLogged.subscribe((res: any) => {
      if (res || user) {
        header["Authorization"] = `Bearer ${user?.data?.api_token}`;
      }
    });



    request = request.clone({
      setHeaders: header,
      // url: request.url.replace("http", "https"),
    });

    return next.handle(request);
  }
}
