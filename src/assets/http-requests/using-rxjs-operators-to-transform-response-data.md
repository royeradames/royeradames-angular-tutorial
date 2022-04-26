We can transform the response data with `.pipe()` and `map` from `rxjs/operators`

> we can achieve this in the subscribe but using the map make things easier to read

## Practice 

Transform the response data from an object to a list of records with RxJS operators, and display the response data

```ts
onFetchPosts() {
  // Send Http request
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
      console.log(posts);
      this.loadedPosts = posts;
      console.log(this.loadedPosts);
    });
}

onClearPosts() {
    // Send Http request
    this.loadedPosts = [];
  }
```

```html
<div class="row">
  <div class="col-xs-12 col-md-6 col-md-offset-3">
    <p *ngIf="loadedPosts.length < 1">{{ post }}</p>
    <ul class="list-group" *ngIf="loadedPosts.length >= 1">
      <li *ngFor="let post of loadedPosts" class="list-group-item" >
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</div>
```