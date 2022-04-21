You need `FormsModule` imported in the module.ts to be able to use reactive form method.

`FormsModule`

`FormGroup`

``

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
  FormsModule,
  ReactiveFormsModule
],
```
