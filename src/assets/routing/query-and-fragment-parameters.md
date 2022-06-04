Handling query params (`?key=value&otherKey:otherValue`) are commonly use in APIs. The query can be set, capture, and preserve. Fragments URL (`/#heading1`) is a link which jumps to a content which contains the id mentioned in the fragment of Angular router. It is a internal page reference, some times called a name anchor.

- `routerLink`
- `queryParams`
- `fragment`
- `queryParamsHandling`

## Setting query and fragment parameters

`queryParams` and `fragment` directive which binds to the `routerLink` directive.

```html
 <a
    [routerLink]="['/servers', 5]"
    [queryParams]="{ allowEdit: '1' }"
    fragment="loading"
    href="#"
    class="list-group-item"
    *ngFor="let server of servers"
  >
    A link with query params and fragment parameters 
  </a>
```

Results in URL `RootURL/servers/5?allowEdit=1#loading`


### Programmatically navigating

```ts
this.router.navigate(['/servers', id, 'edit'], {
  queryParams: { allowEdit: '1' },
  fragment: 'loading',
});
```

## Programmatically use and subscribe to query params and fragments

```ts
private route: ActivatedRoute

this.route.snapshot.queryParams;
this.route.snapshot.fragment;
this.route.queryParams.subscribe();
this.route.fragment.subscribe();
```

## Preserve params when navigating

If you want to `preserve` or `merge` your query when navigation away from your component then

`QueryParamsHandling = 'merge' | 'preserve' | ''`

```ts
onEdit(){
  this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"})
}
```

## Practice

Add a query, and fragment param to the `/servers` route. Then navigate to server panel and inspect the URL.

### `app.module.ts`

```ts
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id', component: ServerComponent },
  { path: 'servers/:id/edit', component: EditServerComponent },
];
```

`servers.components.html`

```html
<div class="list-group">
    <a
      [routerLink]="['/servers', 5]"
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

`server.component.html`

```html
<h5>{{ server.name }}</h5>
<p>Server status is {{ server.status }}</p>
<button class="btn btn-primary" (click)="onEdit()">Edit server</button>
<a routerLink="edit" queryParamsHandling="preserve">Edit server</a>
```

`server.component.js`

```ts
server: {id: number, name: string, status: string};

constructor(private serversService: ServersService, private route: ActivatedRoute, private router:Router) { }

ngOnInit() {
  this.server = this.serversService.getServer(1);
}

onEdit(){
  this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"})
}
```

`home.component.html`
```ts
<button class="btn btn-primary" (click)="onLoadServer(1)">Load Server 1</button>
```

`home.component.ts`

```ts
onLoadServer(id: number) {
  this.router.navigate(['/servers', id, 'edit'], {
    queryParams: { allowEdit: '1' },
    fragment: 'loading',
  });
}
```

`edit-server.components.ts`
```ts
constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
```

