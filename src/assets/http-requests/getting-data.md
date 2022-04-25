We can can do a HTTP get with `private http: HttpClient` `this.http.get(<url>)` `.subscribe( data => /*your logic */)`

on the subscribe we can assign the data to a variable and go from there. 

## Practice 

After a post get the post data and show it the response has string.

app.component.ts

```ts
this.http
  .get(
    'https://angular-the-complete-gui-42271-default-rtdb.firebaseio.com/posts.json'
  )
  .subscribe((data) => {
    this.post = JSON.stringify(data);
    this.cannotClearPost = false;
  });
```