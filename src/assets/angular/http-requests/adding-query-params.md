We can add query params in the URL string or we can use HttpParams and pass it in the option `params`.

Inline query params

`URL?key=value`

Query params in option object

```ts
let searchParams = new HttpParams();

new HttpParams().append('print', 'pretty')

{ params: searchParams }
```

## Practice 

Add query params to the get http request. See the request url in the network header request url.

posts.service.ts

```ts
fetchPosts() {
  let searchParams = new HttpParams();
  searchParams = searchParams.append('print', 'pretty');
  searchParams = searchParams.append('custom', 'key');

  return this.http
    .get<{ [key: string]: Post }>(this.url, {
      headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
      params: searchParams
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

