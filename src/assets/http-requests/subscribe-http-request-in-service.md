We can subscribe to our HTTP request in the service, capture the response with `Subject`, subscribe and unsubscribe to it in the component

service.ts 

```ts
import { Subject } from 'rxjs';

postResponse = new Subject<{ name: string }>();
error = new Subject<string>();

subscribe(data => { this.postResponse.next(responseData)}, error => this.error.next(error.message)

```

component.ts

```ts
private postResponseSub: Subscription;
private errorSub: Subscription;

this.postsService.error.subscribe(
  (errorMessage) => (/* logic */
);

this.postResponseSub = this.postsService.postResponse.subscribe(
  (postResponse) => /* logic */ )

this.errorSub.unsubscribe();
this.postResponseSub.unsubscribe();
);
```

## Practice 

Capture the create and store post method response and error and render them in the component.

service.ts 

```ts
import { Subject } from 'rxjs';

error = new Subject<string>();
postResponse = new Subject<{ name: string }>();

createAndStorePost(postData: Post) {
  return this.http.post<{ name: string }>(this.url, postData).subscribe(
    (responseData) => this.postResponse.next(responseData),
    (error) => this.error.next(error.message)
  );
}
```

app.component.ts

```ts
private postResponseSub: Subscription;
private errorSub: Subscription;

constructor(private postsService: PostsService) {
  this.errorSub = this.postsService.error.subscribe(
    (errorMessage) => (this.error = errorMessage)
  );

  this.postResponseSub = this.postsService.postResponse.subscribe(
    (postResponse) => (this.response = JSON.stringify(postResponse))
  );
}
ngOnDestroy(): void {
  this.errorSub.unsubscribe();
  this.postResponseSub.unsubscribe();
}
```