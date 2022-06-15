We can have multiple interceptors. We need a class that implements an interceptors and in the `module.ts` let angular know about it. **Order Matters.**

## Practice 

Create a new interceptor and add it to the providers array.

auth-interceptor.service.ts **remove** 

```ts
.pipe(
  tap((event) => {
    console.log('changing the response for all HTTP request');
    console.log(event);
    if (event.type === HttpEventType.Response) {
      console.log('Response arrived, body data: ');
      console.log(event.body);
    }
  })
);
```

Create `loggin-interceptor.service.ts`

```ts
import { HttpEventType } from '@angular/common/http';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LogginInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Outgoing request');
    console.log(req.url);
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Incoming response');
          console.log(event.body);
        }
      })
    );
  }
}
```

app.module.ts

```ts
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthnInterceptorSerivce,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LogginInterceptorService,
    multi: true,
  },
],
```

Change the order and see what happens in the console log.