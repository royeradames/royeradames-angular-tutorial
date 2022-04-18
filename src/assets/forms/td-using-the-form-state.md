Add functionality the our form with Angular form state object and dynamic classes.

`f.valid` true or false if the whole form is valid. Can disable a the submit button until the form is valid.
`.ng-invalid` css class added by angular when the input has invalid data
`.ng-touched` css class added by angular when an input is touched by the user

## practice 

Disable the button

```html
<button class="btn btn-primary" type="submit" disabled="f.valid">Submit</button>
```

Add red border to invalid input after user had a change to edit them

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```
