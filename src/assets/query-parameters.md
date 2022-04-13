`?key=value&otherKey:otherValue`. Commonly used in APIs.

In angular we use `queryParams` and `fragment` directive which binds to the `routerLink` directive.

`[queryParams]="{allowEdit : '1'}"` => `?allowEdit=1`

`fragment="loading"` => `?allowEdit=1#loading`

## routerLink

```ts
this.router.navigate(['/servers', id, 'edit'], {
  queryParams: { allowEdit: '1' },
  fragment: 'loading',
});
```

## Programmatically navigating

```ts
this.router.navigate(['/servers', id, 'edit'], {
  queryParams: { allowEdit: '1' },
  fragment: 'loading',
});
```

## Practice

`app.module.ts`

```ts
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent },
];
```

`servers.components.html`

```html
<div class="list-group">
    <a
      [routerLink]="['/servers', 5, 'edit']"
      [queryParams]="{ allowEdit: '1' }"
      fragment="loading"
      href="#"
      class="list-group-item"
      *ngFor="let server of servers"
    >
      {{ server.name }}
    </a>
  </div>
</div>
```

`home.component.html`
`<button class="btn btn-primary" (click)="onLoadServer(1)">Load Server 1</button>`

`home.component.ts`

```ts
onLoadServer(id: number) {
  this.router.navigate(['/servers', id, 'edit'], {
    queryParams: { allowEdit: '1' },
    fragment: 'loading',
  });
}
```
