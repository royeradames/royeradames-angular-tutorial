A custom validator is a function that `.binds(this)` and return { <errorName>: boolean } or null.

`this.<validator function name>.bind(this)`

`<validator function name>(control: FormControl): { [s: string]: boolean }{}`

## Practice

```ts
forbiddenUsernames = ['Chris', 'Anna'];

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
}

forbiddenNames(control: FormControl): { [s: string]: boolean } {
  const isForbiddenName =
    this.forbiddenUsernames.indexOf(control.value) != -1;
  if (isForbiddenName) return { nameIsForbidden: true };
  return null;
}
```