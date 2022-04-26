To show or hide a loading indicator we create a boolean property that initialize has false. Then can add a loading indicator by toggling a boolean value next to the http request and inside the subscription response, and showing an indicator depending on the value.

```ts
isLoading = false;

onFetch(){
  isLoading = true;
  this.http.get("url").subscribe(() => {
    isLoading = false;
    ...
  });
}
```

```html
*ngIf="isLoading"
*ngIf="!isLoading"
```
## Practice 

Show an loading indicator 

```ts
isFetching = false;

onFetchPosts() {
  // Send Http request
  this.isFetching = true;
  this.postsService.fetchPosts().subscribe((posts) => {
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