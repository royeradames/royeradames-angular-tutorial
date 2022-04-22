We change know the current input or form status (valid or invalid) of the form or a specific formControl.

`this.signupForm.valueChanges.subscribe((value) => /*your logic*/);`

`this.signupForm.get(<formControl path>).valueChanges.subscribe((value) => /*your logic*/);`

`this.signupForm.statusChanges.subscribe((value) => /*your logic*/);`

`this.signupForm.get(<formControl path>).statusChanges.subscribe((value) => /*your logic*/);`

## Practice

```ts
 constructor() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    this.signupForm.valueChanges.subscribe((value) => console.log(value));
    this.signupForm
      .get('userData.username')
      .valueChanges.subscribe((value) => console.log(value));
    this.signupForm
      .get('userData.username')
      .statusChanges.subscribe((value) => console.log(value));
    this.signupForm.statusChanges.subscribe((value) => console.log(value));
  }
```