
Link path can be relative or absolute.


## routerLink
```ts
// If the first segment begins with /, the router will look up the route from the root of the app.
<a routerLink="/"

/* If the first segment begins with ./, or doesn't begin with a slash, the router will instead look in the children of the current activated route. */
<a routerLink="link-without-slash"
<a routerLink="./"

// And if the first segment begins with ../, the router will go up one level.
<a routerLink="../"
```

You can always add a `'/' + variable name` to make sure the path is absolute
## In servers.component.html

```ts
<div class="col-xs-12 col-sm-4">
  <ol>
    <li><a routerLink="/servers">Reload Page</a></li>
    <li><a routerLink="servers">Reload Page</a></li>
    <li><a routerLink="./servers">Reload Page</a></li>
    <li><a routerLink="../removeServer/addString">Reload Page</a></li>
  </ol>
  <app-edit-server></app-edit-server>
  <hr />
  <app-server></app-server>
</div>
```

If you are in the root path absolute and relative paths do the same thing.
