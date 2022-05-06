To setup a class component form you need to initalize it with `FormBuilder()`

`component = new <class>(new FormBuilder());`

After that you can use general form methods to expect the form state to be in a certain state.

- `.get()` get a control by name
- `.contains(<substring>)` check if the control value contains the given substring
- `.toBeTruthy()` check if the control value is truthy
- `.toBeFalsy()` check if the control value is falsy
- `.setValue(<value>)` set the control value

## Practice

Test that the form has name and email controls, and that name is require.

```ts
import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control require', () => {
    let control = component.form.get('name');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
```
