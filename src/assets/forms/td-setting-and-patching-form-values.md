Setting sets the whole form while patching only changes a input that is expecify.

`this.signupForm.setValue()`

`this.signupForm.form.patchValue()`

`{<formControl name>: <value> || <formGroup name>: { <formControl name>: <value> }}` input for the patch or setValue function.

## Practice

Add radio buttons

```ts
suggestUserName() {
  const suggestedName = 'Superuser';

  this.signupForm.form.patchValue({
    userData: {
      username: suggestedName,
    },
  });
}

setProfile(option: string) {
  if (option === 'reset') {
    this.signupForm.setValue({
      userData: {
        username: '',
        email: '',
      },
      secret: '',
      questionAnswer: '',
      gender: '',
    });
    return;
  }

  this.signupForm.setValue({
    userData: {
      username: 'your name',
      email: 'royeraadames@gmail.com',
    },
    secret: 'pet',
    questionAnswer: 'Type your answer here',
    gender: 'male',
  });
}
```
