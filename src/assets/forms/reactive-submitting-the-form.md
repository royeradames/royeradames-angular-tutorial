We tell Angular in the HTML what function to run when the form is submitted. 

`(ngSubmit)="onSubmit()"`

## Practice

```html
<form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
```

```ts
onSubmit() {
  console.log(this.signupForm);
}
```
