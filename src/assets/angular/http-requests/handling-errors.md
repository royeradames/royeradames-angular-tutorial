Errors are handle by a second function of the subscribe method.

`subscribe(data => /*logic*/, error => => /*logic*/`

## Practice 

Don't leave the user in an infinite loading message when there is an error.

app.component.ts

```ts
error = null;

onFetchPosts() {
  // Send Http request
  this.isFetching = true;
  this.postsService.fetchPosts().subscribe(
    (posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    },
    (error) => {
      this.error = error.message;
      this.isFetching = false;
    }
  );
}

onHandleError() {
  this.error = null;
}
```

app.component.html

```html
<p *ngIf="isFetching && !error">Loading...</p>
<div class="alert alert-danger" *ngIf="error">
  <h1>An Error Occurred!</h1>
  <p>{{error}}</p>
  <button class="btn btn-danger" (click)="onHandleError()" >Okay</button>
</div>
```