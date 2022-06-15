We can handle the error before the subscription.

```ts
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

private http: HttpClient

this.http.get<type>("URL").pipe(catchError((errorRes) => {
    // send to analytic
    return throwError(errorRes);
  }))
```

## Practice 


posts.service.ts

```ts
fetchPosts() {
  return this.http.get<{ [key: string]: Post }>(this.brokenUrl).pipe(
    map((responseData) => {
      // convert incoming data into a list of records
      const postsArray: Post[] = [];
      for (const key in responseData) {
        // make sure it doesn't use a prototype
        if (responseData.hasOwnProperty(key))
          postsArray.push({ ...responseData[key], id: key });
      }
      return postsArray;
    }),
    catchError((errorRes) => {
      // send to analytic
      console.log('Error handling before subscribing');
      return throwError(errorRes);
    })
  );
}
```

