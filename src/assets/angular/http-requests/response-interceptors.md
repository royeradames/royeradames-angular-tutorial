We can also edit the response for all HTTP request before they are send.

We can subscribe to the `next.handle()` and run a pipe to manipulate the response.
## Practice 

console log the event type of the http request.

auth-interceptor.service.ts

```ts
return next.handle(modifiedRequest).pipe(
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

