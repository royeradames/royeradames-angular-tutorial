You can set the form values to a variable and use it anywhere.

`NgForm.value`

## Practice

Capture the form values and show them in the page

```ts
user = {
  username: '',
  email: '',
  secretQuestion: '',
  answer: '',
  gender: '',
};

onSubmit(form: NgForm) {
  this.submitted = true;

  this.user = {
    username: form.value.userData.username,
    email: form.value.userData.email,
    secretQuestion: form.value.secret,
    answer: form.value.questionAnswer,
    gender: form.value.gender,
  };
}
```

```html
<hr />
<div class="row" *ngIf="submitted">
  <div class="col-xs-12">
    <h3>Your Data</h3>
    <p>Username: {{ user.username }}</p>
    <p>Mail: {{ user.email }}</p>
    <p>Secreat Question: Your first {{ user.secretQuestion }}</p>
    <p>Answer: {{ user.answer }}</p>
    <p>Gender: {{ user.gender }}</p>
  </div>
</div>
```
