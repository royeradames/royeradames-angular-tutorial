handle the form submition. You want to stop the default submition and let angular take over.

`ngSubmit`
`#f="ngForm` local reference that tells angular to give it access to the form object
`@ViewChild`

## practice

`app.component.html`

```html
<form (ngSubmit)="onSubmit(f)" #f='ngForm'>
```

`app.component.js`

```ts
onSubmit(form: NgForm) {
  console.log(form);
}
```

You notice that the `form: NgForm` has many methods can be used to give the form extra functionality.


## @ViewChild

You cna use `@ViewChild` to skip setting the reference `#f` equal to `ngForm`. It can also let you get access to the form quicker.

```html
<form (ngSubmit)="onSubmit(f)" #f>
```

`app.component.js`

```ts
@ViewChild('f') signupForm: NgForm;

onSubmit() {
  console.log(this.signupForm);
}
```

