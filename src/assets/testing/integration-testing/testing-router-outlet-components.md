We can make sure that `routerLink` points to the right path, and that `<router-outlet></router-outlet>` is loading correctly. We can test the `<router-outlet></router-outlet>` automatically so in can we break it for any reason we can get notify without running the app.

> `<router-outlet></router-outlet>` tells angular where to put 

> query retrieves a single query
> queryAll retrieves an array of queries

## practice 

Test that the app component has a router outlet, and a link to todos page.

```ts
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    // instead of using RouterModule we use RouterTestingModule
    imports: [RouterTestingModule.withRoutes([])],
    declarations: [AppComponent],
  }).compileComponents();
}));

 it('should have a router outlet', () => {
  const de = fixture.debugElement.query(By.directive(RouterOutlet));

  expect(de).not.toBeNull();
});

it('should have a link to todos page', () => {
  const debugElements = fixture.debugElement.queryAll(
    By.directive(RouterLinkWithHref)
  );

  // <a href="/todos">
  // while we expect href to be a attribute angular team desired to host it as a .properties
  const index = debugElements.findIndex(
    (de) => de.properties['href'] === '/todos'
  );

  expect(index).toBeGreaterThan(-1);
});
```