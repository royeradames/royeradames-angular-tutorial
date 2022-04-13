children get their parent path appended 
Parent component need to have a `<router-outlet></router-outlet>` in their component so that children can be render

```ts
{
  path: 'servers',
  component: ServersComponent,
  children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent },
  ],
},
```

## practice 

`app.module.ts`

```ts
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', 
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
];
```

`users.component.html`

```html
<div class="list-group">
  <a [routerLink]="['/users', user.id, user.name]" href="#" class="list-group-item" *ngFor="let user of users">
    {{ user.name }}
  </a>
</div>

<div class="col-xs-12 col-sm-4">
  <router-outlet></router-outlet>
</div>
```

`users.component.html`

```html
<div class="list-group">
  <a [routerLink]="['/users', user.id, user.name]" href="#" class="list-group-item" *ngFor="let user of users">
    {{ user.name }}
  </a>
</div>
<div class="col-xs-12 col-sm-4">
  <router-outlet></router-outlet>
</div>
```
