A custom validator is a function that `.binds(this)` and return { <errorName>: boolean } or null. We can do Async custom validation by passing it has the third option.

`this.<validator function name>.bind(this)`

`<validator function name>(control: FormControl): { [s: string]: boolean }{}`

See custom error tutorial so show how to render the validation error code.

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
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails.bind(this)
      ),
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

forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (control.value === 'test@test.com')
        resolve({ emailIsForbidden: true });
      else {
        resolve(null);
      }
    }, 1500);
  });
  return promise;
}
```