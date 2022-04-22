We can assign specific form error message to specific controlForm errors.

`*ngIf="<formControl>.get(<formControl Path from top level to control>).errors[<error name>]"`

## Practice

Have costume error message for nameIsForbidden and require errors.

```html
<span
  *ngIf="
    signupForm.get('userData.username').invalid &&
    signupForm.get('userData.username').touched
  "
  class="help-block"
>
  <span
    *ngIf="
      signupForm.get('userData.username').errors['nameIsForbidden']
    "
    >This name is invalid</span
  >
  <span
    *ngIf="signupForm.get('userData.username').errors['required']"
    >This field required!</span
  >
</span>
```