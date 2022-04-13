## Encode data within the path

`path: 'users/:id'`

## Capture path data

`private route: ActivatedRoute`
`this.route.snapshot.params['id']`

## To be able to reacted to loaded component change of data

```ts
this.route.params.subscribe((params: Params) => {
  this.user = {
    id: params['id'],
    name: params['name'],
  };
});
```

You don't need to subscribe if your component will not load itself.

### Note 

subscription (Observables) need to be unsubscribe on `ngOnDestroy()` so that the subscription doesn't continue running in memory
- Except some Angular subscriptions that Angular destroy automatically like router subscriptions 

## You can pass down data to a component through with params

Passing down id, and name to UsersComponent

`app.module.ts`

```ts
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: ServersComponent },
];
```

`user.component.ts`

```ts
user: { id: number; name: string };
paramsSubscription: Subscription;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.user = {
    id: this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name'],
  };
  this.paramsSubscription = this.route.params.subscribe((params: Params) => {
    this.user = {
      id: params['id'],
      name: params['name'],
    };
  });
}

ngOnDestroy() {
  this.paramsSubscription.unsubscribe();
}
```

`user.component.html`

```html
<p>User with ID {{ user.id }} loaded.</p>
<p>User name is {{ user.name }}</p>
<button [routerLink]="['/users', 2, 'beth']">Load beth</button>
```

