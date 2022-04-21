We can group `FormControl` by nesting our desire `FormControl` with `FormGroup`, and using `formGroupName="<formGroup name>"` in the tag that wraps all the `FormControl`.

`FormGroup`

`formGroupName="<formGroup name>"`

## Practice

Group username and email.

```ts
constructor() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
    });
  }
```

```html
<div formGroupName="userData">
  <div class="form-group">
    <span
      *ngIf="
        signupForm.get('userData.username').invalid &&
        signupForm.get('userData.username').touched
      "
      class="help-block"
      >Please enter a valid username!</span
    >
  </div>
  <div class="form-group">
    <span
      class="help-block"
      *ngIf="
        signupForm.get('userData.email').invalid &&
        signupForm.get('userData.email').touched
      "
      >Please enter a valid email!</span
    >
  </div>
</div>
```
