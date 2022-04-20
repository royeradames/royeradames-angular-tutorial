We can reset the form with the reset method. No need to set the values to default. 

`form: NgForm`

`form.reset()`

## Practice

Add reset onSubmit or when you hit the reset button.

```ts
setProfile(option: string) {
  if (option === 'reset') {
    this.signupForm.reset();
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

onSubmit(form: NgForm) {
  this.submitted = true;

  this.user = {
    username: form.value.userData.username,
    email: form.value.userData.email,
    secretQuestion: form.value.secret,
    answer: form.value.questionAnswer,
    gender: form.value.gender,
  };

  form.reset();
}
```
