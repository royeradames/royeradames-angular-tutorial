We can add a list of input with the `FormArray` and then pushing `FormControls` to them while we render the unwrap `FormArray` controls in the html.

## Practice

Bellow the gender, add a way to list your hobbies.

```html
 <div formArrayName="hobbies">
  <h4>Your Hobbies</h4>
  <button class="btn btn-default" type="button" (click)="onAddHobby()">
    Add Hobby
  </button>
  <div
    class="form-group"
    *ngFor="
      let hobbyControl of signupForm.get('hobbies').controls;
      index as i"
  >
    <input type="text" class="form-control" [formControlName]="i" />
  </div>
</div>
```

```ts
constructor() {
  this.signupForm = new FormGroup({
    userData: new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    }),
    gender: new FormControl('male'),
    hobbies: new FormArray([]),
  });
}
onAddHobby() {
  const control = new FormControl(null, Validators.required);
  (<FormArray>this.signupForm.get('hobbies')).push(control);
}
```

