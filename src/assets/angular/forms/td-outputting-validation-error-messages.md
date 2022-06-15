Add error message depending on the form object state being valid and touched. First reference the input you want access to then get access to the form object.

- `#<reference name>`
- `<reference name>.invalid`
- `<reference name>.touch`

## Practice

Get the reference of the email input and show the error message if email input is invalid and touched

```html
<input
  type="email"
  id="email"
  class="form-control"
  ngModel
  name="email"
  required
  email
  #email="ngModel"
/>
<span class="help-block" *ngIf="email.invalid&&email.touched">Please enter a valid Email</span>
```
