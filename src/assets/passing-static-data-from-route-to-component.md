You can pass static data with `ActivatedRoute` `data` 

## Practice

Pass message from the route to the errorPageComponent

`app-routing.module.ts`

```ts
{
  path: 'not-found',
  component: ErrorPageComponent,
  data: { message: 'Page not found!' },
}
```

`error-page.component.ts`
```ts
errorMessage: string;
constructor(private route: ActivatedRoute) {
  this.errorMessage = this.route.snapshot.data['message'];
  this.route.data.subscribe(
    (data) => (this.errorMessage = data['message'])
  );
}
```


