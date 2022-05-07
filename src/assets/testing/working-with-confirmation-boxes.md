When we use an interactive box we can fake the box response with a spy, then in a other method or service uses it will return the value we specify.

- `spyOn(window, 'confirm').and.returnValue(<boolean>);`
- `Observable.empty()` when we don't care about the return value

## Practice

```ts
  it('should set the server property if server return an error when adding a new todo', () => {
    const error = 'Error from the server';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
```