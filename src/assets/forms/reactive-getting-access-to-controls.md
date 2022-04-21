

`signupForm: FormGroup`

`signupForm.get('<FormControl name>')` Get access to a specific FormControl Javascript form objects

`signupForm` Get access to global Javascript form objects

## Practice

Add error message to username, email, and whole form.

```html

<span
  *ngIf="
    signupForm.get('username').invalid &&
    signupForm.get('username').touched
  "
  class="help-block"
  >Please enter a valid username!</span
>

<span class="help-block" *ngIf="signupForm.get('email').invalid && signupForm.get('email').touched " >Please enter a valid email!</span>

<span *ngIf="signupForm.invalid && signupForm.touched" class="help-block" >Please enter valid data!</span>

<button
  class="btn btn-primary"
  type="submit"
  [disabled]="signupForm.invalid"
>
  Submit
</button>
```
