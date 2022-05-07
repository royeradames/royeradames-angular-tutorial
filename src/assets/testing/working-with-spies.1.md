
- `Observable.empty()` fake service and return nothing
  - statis import require `import 'rxjs/add/observable/empty';`
- `expect(<spyON>).toHaveBeenCalled()` to check if a spy has been called
- `Observable.throw(error)` fake service and throw an error
  - statis import require `import 'rxjs/add/observable/throw';`
- `expect(<value>).toBeGreaterThan(<value>)` to check if a value is greater than another

## Practice

Test service is called, service is returning value, and service is throwing an error.

```ts
import 'rxjs/add/observable/throw';

it('should call the server to save the changes when when a new todo is added', () => {
  let spy = spyOn(service, 'add').and.callFake((t) => Observable.empty());

  component.add();

  expect(spy).toHaveBeenCalled();
});

it('should call the server to save the changes when when a new todo is added', () => {
  const todo = { id: 1 };
  let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

  component.add();

  expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
});

it('should set the server property if server return an error when adding a new todo', () => {
  const error = 'Error from the server';
  let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

  component.add();

  expect(component.message).toBe(error);
});
```