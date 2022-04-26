We change change the [response data type](https://angular.io/guide/http#requesting-data-from-a-server)

`responseType?: 'arraybuffer'|'blob'|'json' (default) |'text'`

Most of the time the default will do.

## Practice 

Change the create and store post response to text

posts.service.ts

```ts
createAndStorePost(postData: Post) {
  return this.http.post(this.url, postData, { responseType: 'text' }).pipe(
    tap((response) => {
      console.log(response);
    })
  );
}
```

