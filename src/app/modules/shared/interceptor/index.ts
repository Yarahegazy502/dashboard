import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestLogInterceptor } from './request-log.interceptor';
export const interceptor=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:RequestLogInterceptor,
    multi:true
  },
]
