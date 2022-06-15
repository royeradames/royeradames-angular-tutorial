We can make sure that the programmable navigation and the route navigation are working has expected.

> When the module is fake we only want to make sure that it has been call

## Practice

Test that the save method send user to the user page. In `user-details.component.spec.ts`: 

```ts
it('should redirect the user to the users page after saving', () => {
  const router = TestBed.get(Router);
  const spy = spyOn(router, 'navigate');

  component.save();

  expect(spy).toHaveBeenCalledWith(['users']);
});
```

Test the routes. Create `app.routes.spec.ts`

```ts
import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';

describe('routes', () => {
  it('should contain a route for /users', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent });
  });
});

```