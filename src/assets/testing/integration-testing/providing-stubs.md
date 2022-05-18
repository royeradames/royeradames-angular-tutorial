We can create dummy module implementation name stubs that simplify our testing.

> We can use modules like we do in the `.module.ts` file but doing has many negative side effects.
> - Adds more complexity
> - More error prone
> - Testing the Angular framework

To have a stub replace the Router we use a special syntax

`providers: [{ provide: Router, useClass: RouterStub }],`


## Practice

Test that we have a valid navigation, and that we can navigate to the route.
Remove the `x` from the test.

```ts
class RouterStub {
  navigate(params) {}
}

class ActivatedRouteStub {
  params: Observable<any> = empty();
}

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [UserDetailsComponent],
    providers: [
      { provide: Router, useClass: RouterStub },
      { provide: ActivatedRoute, useClass: ActivatedRouteStub },
    ],
  }).compileComponents();
}));
```