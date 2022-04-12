
Link path can be relative or absolute.

- Absolute path start with `/` and the path start at the domain name.
- Relative can add or remove to the current path
  - `../` removes
  - Exclude `/` or `./` adds

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


