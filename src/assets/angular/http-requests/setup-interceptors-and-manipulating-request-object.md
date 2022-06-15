Run code before the request is sent, and modify the request object before it is sent.

Create interceptor

```ts
export class <Your interceptor service name> implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /* logic */
    return next.handle(<HttpRequest>);
  }
}
```

Setup interceptor

```ts
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: <Your interceptor service>,
    multi: true, //allow multiple interceptors
  },
],
```

Modify req object

> Req object is immutable

```ts
const modifiedRequest = req.clone({
    headers: req.headers.append('Auth', 'bear-tocken'),
  });
return next.handle(modifiedRequest);
```

`clone` copy the req body

`append` push to the existing data

`next.handle()` move the <HttpRequest> to the next function down the chain

## Practice 

Add auth token to all requests.

create auth-interceptor.service.ts

```ts
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthnInterceptorSerivce implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'bear-tocken'),
    });
    return next.handle(modifiedRequest);
  }
}
```

app.module.ts

```ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthnInterceptorSerivce } from './auth-interceptor.service';

providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthnInterceptorSerivce,
    multi: true,
  },
],
```

Check ou the network panel and see the auth header.