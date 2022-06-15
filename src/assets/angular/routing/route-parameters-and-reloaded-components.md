We can pass data through the page URL and use it to load data to our components.

Encode data within the path

`path: 'users/:id'`

## Capture path data

```ts
private route: ActivatedRoute
this.route.snapshot.params['id']
```

## Reload components

To be able to update reloaded component you need to subscribe to the subscription that initializes when the URL changes, and update the component with the new data
For example, `route.params` emits new value when there is a new parameter in the URL:

```ts
this.activeRoute.params.subscribe((params: Params) => {
  this.user = {
    id: params['id'],
    name: params['name'],
  };
});
```

> You don't need to subscribe if your component will not reload itself.

[Resources](https://angular.io/api/router/ActivatedRoute)
```
## All params are string

`+` can convert a string number to a number 
- `const id = +this.route.snapshot.params['id']`
- `+params['id']`

> remember to comber your string number into numbers

## Practice

You can pass down data to a component through with params

Pass down id, and name to UsersComponent

app.module.ts

```ts
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: ServersComponent },
];
```

user.component.ts

```ts
user: { id: number; name: string };
paramsSubscription: Subscription;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.user = {
    id: this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name'],
  };
  this.route.params.subscribe((params: Params) => {
    this.user = {
      id: params['id'],
      name: params['name'],
    };
  });
}
```

user.component.html

```html
<p>User with ID {{ user.id }} loaded.</p>
<p>User name is {{ user.name }}</p>
<button [routerLink]="['/users', 2, 'beth']">Load beth</button>
```

