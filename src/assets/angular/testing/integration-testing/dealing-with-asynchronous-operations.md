We can await promises changes with (fakeAsync)[https://angular.io/api/core/testing/fakeAsync] and (tick)[https://angular.io/api/core/testing/tick]. FakeAsync enable tick to simulate passage of time.

> Why? due to subscriptions subscribing immediately

## Practice

Await for the promise to finish and then expect the result to be true.

```ts
it('should load todos from the server (fakeAsync)', fakeAsync(() => {
  const service = TestBed.get(TodoService);
  spyOn(service, 'getTodosPromise').and.returnValue(
    Promise.resolve([1, 2, 3])
  );

  fixture.detectChanges();

  tick();
  expect(component.todos.length).toBe(3);
}));
```


> Previous could had been handle with async but now async is deprecated 
```ts
it('should load todos from the server (async)', async(() => {
  const service = TestBed.get(TodoService);
  spyOn(service, 'getTodosPromise').and.returnValue(
    Promise.resolve([1, 2, 3])
  );

  fixture.detectChanges();

  fixture.whenStable().then(() => {
    expect(component.todos.length).toBe(3);
  });
}));
```

