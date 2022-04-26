Normally Angular parses the response body and if we want to get access to the whole response data we can with `observe`.

`observe: body (default) | response | events`

[Requesting data from a server](https://angular.io/guide/http#requesting-data-from-a-server)

- Body: response is the body data object
- response: exposes body, headers, status, url and others
- events: Run code for every HttpEvent

Type enumeration for the different kinds of `HttpEvent`

```ts
export declare enum HttpEventType {
  /**
   * The request was sent out over the wire.
   */
  Sent = 0,
  /**
   * An upload progress event was received.
   */
  UploadProgress = 1,
  /**
   * The response status code and headers were received.
   */
  ResponseHeader = 2,
  /**
   * A download progress event was received.
   */
  DownloadProgress = 3,
  /**
   * The full response including the body was received.
   */
  Response = 4,
  /**
   * A custom event from an interceptor or a backend.
   */
  User = 5
}
```

## Practice 

console log the response to see status code, and response in different HttpEvent stages.

posts.service.ts

```ts
fetchPosts() {
  return this.http
    .get<{ [key: string]: Post }>(this.url, {
      headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
      observe: 'response',
    })
    .pipe(
      map((responseData) => {
        console.log(responseData);
        console.log(responseData.status);
        console.log(responseData.body);
        // convert incoming data into a list of records
        const postsArray: Post[] = [];
        for (const key in responseData.body) {
          // make sure it doesn't use a prototype
          if (responseData.body.hasOwnProperty(key))
            postsArray.push({ ...responseData.body[key], id: key });
        }
        return postsArray;
      })
    );
}

deletePosts() {
  return this.http.delete(this.url, { observe: 'events' }).pipe(
    tap((event) => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // your logic
        console.log(event);
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    })
  );
}
```

