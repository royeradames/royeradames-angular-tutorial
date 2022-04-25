We can transform the response data with `.pipe()` and `map` from `rxjs/operators`

> we can achieve this in the subscribe but using the map make things easier to read

## Practice 

Transform the response data from an object to a list of records with RxJS operators 

```ts
this.http
  .get(
    'https://angular-the-complete-gui-42271-default-rtdb.firebaseio.com/posts.json'
  )
  .pipe(
    map((responseData) => {
      // convert incoming data into a list of records
      const postsArray = [];
      for (const key in responseData) {
        // make sure it doesn't use a prototype
        if (responseData.hasOwnProperty(key))
          postsArray.push({ ...responseData[key], id: key });
      }
      return postsArray;
    })
  )
  .subscribe((data) => {
    this.post = JSON.stringify(data);
    this.cannotClearPost = false;
  });
```