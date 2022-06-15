When we have nested component selectors we need to decide how to handle them. Import them in or ignore them.

## Importing will let us know if we have an error with the selector
```ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([])],
    declarations: [NavComponent],
  }).compileComponents();
});
```

We would be able to catch the selector not working without serving the app.

## Ignore will not let us know if the selector is working properly but we won't have to import a complex list of components.
We can ignore the angular component selector tags with `NO_ERRORS_SCHEMA`
```ts
import { NO_ERRORS_SCHEMA } from '@angular/core';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([])],
    declarations: [AppComponent, NavComponent],
    schemas: [NO_ERRORS_SCHEMA],
  }).compileComponents();
});
```

A significant disadvantage of this approach is that it will not catch any error with the nested angular tags.

> When we break a big component into smaller component and nested together we need to move all of the test that target the smaller component from the parent to the child. 

## Practice

Move to the app.component.ts nav to its own component with the test that target that part of the code.
- `ng g c nav`
- Copy paste the html to the new generated component
- update the test `.configureTestingModule` to import the new component
```ts
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([])],
    declarations: [NavComponent],
  }).compileComponents();
});
```
- Move the nav component test to the new component
```ts
it('should have a link to todos page', () => {
  const debugElements = fixture.debugElement.queryAll(
    By.directive(RouterLinkWithHref)
  );

  const index = debugElements.findIndex(
    (de) => de.properties['href'] === '/todos'
  );

  expect(index).toBeGreaterThan(-1);
});
```
