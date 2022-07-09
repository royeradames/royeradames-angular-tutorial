You need `ReactiveFormsModule` to be import in your app module to be able to ue the react form approach. Then we create the form in the `component.ts` file and sync it with the `component.html` file.

To create the form in `.ts` we use:
- `FormGroup`
- `FormControl`

To sync the form with the html we use:
- `[formGroup]="<initial FormGroup>"` in the `<form>` tag
- `formControlName="<Name of the control form>"` in the `<input>` tag

To handle the submit we use:
- `(ngSubmit)="<function to call on submit>"` in the `<form>` tag

## Practice

Console log the form object when you submit the form.

`app.module.ts`

```ts
imports: [
  BrowserModule,
  ReactiveFormsModule
],
```

`app.component.ts`

```ts
import { FormGroup } from '@angular/forms';

signupForm: FormGroup;

constructor() {
  this.signupForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    gender: new FormControl('male'),
  });
}

onSubmit() {
  console.log(this.signupForm);
}
```

`app.component.html`

```html
<form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      formControlName="username"
      class="form-control"
    />
  </div>
  <div class="form-group">
    <label for="email">email</label>
    <input
      type="text"
      id="email"
      formControlName="email"
      class="form-control"
    />
  </div>
  <div class="radio" *ngFor="let gender of genders">
    <label>
      <input type="radio" formControlName="gender" [value]="gender" />{{
        gender
      }}
    </label>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
```
