We can can do a HTTP DELETE with `private http: HttpClient` `this.http.delete(<url>)` `.subscribe( () => /* clear your local render */)`

## Practice 

Delete all of the posts from the server and then from our angular app.

posts.service.ts
  
```ts
deletePosts(){
  return this.http.delete(this.url)
}
```

app.component.ts

```ts
onClearPosts() {
  // Send Http request
  this.postsService.deletePosts().subscribe(() => (this.loadedPosts = []));
}
```