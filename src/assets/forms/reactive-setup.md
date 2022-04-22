You need `FormsModule` imported in the module.ts to be able to use reactive form method. Then you will need to construct the form structure in `.js` and sync it with the html form.

`ReactiveFormsModule`

`FormGroup`

With `ReactiveFormsModule` we get errors like `Can't bind to 'formGroup' since it isn't a known property of 'form'`
## Practice

`app.component.ts`

```ts
import { FormGroup } from '@angular/forms';
signupForm: FormGroup;
```

`app.module.ts`

```ts
imports: [
  BrowserModule,
  ReactiveFormsModule
],
```
