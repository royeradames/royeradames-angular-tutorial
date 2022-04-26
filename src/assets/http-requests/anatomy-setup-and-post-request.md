
Anatomy of a Http Request

| Part of HTTP request     | Example                                |
| ------------------------ | -------------------------------------- |
| Http Verb                | POST, GET, PUT, DELETE                 |
| URL (API Endpoint)       | /posts/1                               |
| Headers (Metadata)       | `{"Content-Type": "application/sjon"}` |
| Body of POST, PUT, PATCH | `{ title: " New Post"}`                |

> If you don't subscribe to a request Angular doesn't send it.

> No need to unsubscribe. Angular handles it for you.

Enable Angular http requests
- `HttpClientModule`



Send Post Request
- `private http: HttpClient` `this.http.post<type of response>(url, data, options)` `.subscribe(data => {...})`

> All http methods response type can be assign with generic type `.<http request><type of response>`

> HTTP request are writing in services

> Best practice to let the component handle the subscription so that they can respond to the respond data. Keeps your component clean.

## Practice 

app.module.ts
```ts
import { HttpClientModule } from '@angular/common/http';

imports: [BrowserModule, FormsModule, HttpClientModule]
```

posts.service.ts

```ts
constructor(private http: HttpClient) {}

createAndStorePost(postData: Post) {
  return this.http.post(
    'https://angular-the-complete-gui-42271-default-rtdb.firebaseio.com/posts.json',
    postData
  );
}
```

app.component.ts

```ts
constructor(private http: HttpClient, private postsService: PostsService) {}

onCreatePost(postData: Post) {
  // Send Http request
  this.postsService
    .createAndStorePost(postData)
    .subscribe(
      (responseData) => (this.response = JSON.stringify(responseData))
    );
}
```