Enable link to change pages without reloading the page with `routerLink` directive. 

## In app.component.html update the nav links

```ts
<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a routerLink="/">Home</a></li>
  <li role="presentation"><a routerLink="/servers">Servers</a></li>
  <li role="presentation"><a routerLink="/users">Users</a></li>
</ul>
```

Hover on the link to see the link path differences.
## For more complex path

use property binding and pass down an array of string with all the segments of the path.

```ts
<li role="presentation"><a [routerLink]="['/users']">Users</a></li>
```

