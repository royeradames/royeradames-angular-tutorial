We can add a loading indicator by toggling a boolean value next to the http request and inside the subscription response, and showing an indicator depending on the value.

## Practice 

Show an loading indicator 

```ts
isFetching = false;

onFetchPosts() {
  // Send Http request
  this.isFetching = true;
  this.http
    .get<{ [key: string]: Post }>(
      'https://angular-the-complete-gui-42271-default-rtdb.firebaseio.com/posts.json'
    )
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
    )
    .subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
}
```

```html
<div class="row">
  <div class="col-xs-12 col-md-6 col-md-offset-3">
    <p *ngIf="loadedPosts.length < 1">{{ post }}</p>
    <ul class="list-group" *ngIf="loadedPosts.length >= 1 && !isFetching">
      <li *ngFor="let post of loadedPosts" class="list-group-item">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </li>
    </ul>
    <p *ngIf="isFetching">Loading...</p>
  </div>
</div>
```