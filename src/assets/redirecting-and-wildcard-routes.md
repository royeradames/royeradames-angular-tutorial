Instead of getting console errors for trying to access routes that doesn't exist we can instead redirect to a valid route.

Commonly used for 404 or redirect to home landing page.

`**` wild card. Make sure to have it last to catch all other routes. Routes are parse from start to finish.
`redirectTo` changes the path to the redirectTo path

## Practice

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
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'something', redirectTo: '/not-found' },
  { path: '**', component: PageNotFoundComponent },
];
```

Move the wildcard to the beginning and you will see that no matter what link to click it will always show the page not found.