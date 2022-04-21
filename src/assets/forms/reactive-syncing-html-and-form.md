We use `[formGroup]="<form code>"` and `formControlName` to sync a input tag to the `FormGroup` `FormControl`

`[formGroup]="<form code>"`

`formControlName="<name of FormControl>"` Need to sync with the code FormControl

## Practice

Sync signupForm with the input.

```ts
<form [formGroup]="signupForm">
  <input
    type="text"
    id="username"
    formControlName="username"
    class="form-control"
  />

  <input
    type="text"
    id="email"
    formControlName="email"
    class="form-control"
  />

  <input type="radio" formControlName="gender" [value]="gender" />{{
      gender
    }}
  </label>
</form>
```
