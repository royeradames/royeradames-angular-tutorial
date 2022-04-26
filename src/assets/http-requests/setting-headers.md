We can send custom headers by passing an object has the last option in the http request.

`{ headers: new HttpHeaders({ 'Name': 'Value' })}`

## Practice 

Send a custom header saying hello to the server.

posts.service.ts

```ts
import { HttpHeaders } from '@angular/common/http';

fetchPosts() {
  return this.http
    .get<{ [key: string]: Post }>(this.url, {
      headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
    })
    .pipe(
      map((responseData) => {
        // convert incoming data into a list of records
        const postsArray: Post[] = [];
        for (const key in responseData) {
          // make sure it doesn't use a prototype
          if (responseData.hasOwnProperty(key))
            postsArray.push({ ...responseData[key], id: key });
        }
        return postsArray;
      })
    );
}
```

