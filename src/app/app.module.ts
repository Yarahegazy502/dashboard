import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { CustomPageTitleStrategy } from './custom-page-title-strategy';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './modules/layout/layout.module';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TimeagoModule } from 'ngx-timeago';
import { TitleStrategy } from '@angular/router';
import { interceptor } from './modules/shared/interceptor';
import { ClipboardModule } from 'ngx-clipboard';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    AuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    TimeagoModule.forRoot(),
    SocialLoginModule,
    ClipboardModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),

  ],
  exports: [SharedModule],
  providers: [DatePipe,AsyncPipe,interceptor,{ provide: TitleStrategy, useClass: CustomPageTitleStrategy } ,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('625050741021-3fht4vpobaf8gl4ugth1i0u5rv4ndlv3.apps.googleusercontent.com'),
          },

        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
