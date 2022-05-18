We can get the provided TestBed modules by using `TestBed.get(<module/service>)`

> implement OnInit is require so that Angular can initialize the method when the component is created

> Angular will call the ngOnInit() method when `fixture.detectChanges()` is first called.

## Practice

Mock the TodoService.getTodos() method, and return `[1,2,3]` as the todos. Check that the initialize the todos property with the `[1,2,3]` returned value.

```ts
// Remove fixture.detectChanges(); from the beforeEach
import { of } from 'rxjs';

it('Should load todos from the server', () => {
  const data = [1, 2, 3];
  let service = TestBed.get(TodoService);
  spyOn(service, 'getTodos').and.returnValue(of(data));
  fixture.detectChanges();

  expect(component.todos).toEqual(data);
});
```