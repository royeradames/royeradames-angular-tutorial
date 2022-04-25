
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
- `private http: HttpClient` `this.http.post(url, data, options)` `.subscribe(data => {...})`


## Practice 

app.module.ts
```ts
import { HttpClientModule } from '@angular/common/http';

imports: [BrowserModule, FormsModule, HttpClientModule]
```

app.component.ts

```ts
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

onCreatePost(postData: { title: string; content: string }) {
  // Send Http request
  this.http
    .post(
      'https://angular-the-complete-gui-42271-default-rtdb.firebaseio.com/posts.json',
      postData
    )
    .subscribe((responseData) => (this.response = JSON.stringify(responseData)));
}
```