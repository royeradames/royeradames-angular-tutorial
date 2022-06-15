We need to know how to work with the `ActivatedRoute.params` in our test but all of its properties are for reading only. We can set our `ActivatedRouteStub` to accept a parameter that uses it as `.params` 

Method to push a value into the `Observable` and use it has a params it's to update the stub to accept the parameter.
```ts
class ActivatedRouteStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  // convert the params into a public property
  get params() {
    return this.subject.asObservable();
  }
  // params: Observable<any> = empty();
}

const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
// cannot use this because all properties are for reading data, not passing data
// our ActivatedRouteStub needs to be updated
// route.params.
route.push({ id: 0 });
```

## Practice

Test that user-details redirect the user to the not found page when an invalid user id is passed

```ts
it('should redirect the user to the not found page when an invalid user id is passed', () => {
  const router = TestBed.get(Router);
  const spy = spyOn(router, 'navigate');

  const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
  route.push({ id: 0 });

  expect(spy).toHaveBeenCalledWith(['not-found']);
});
```