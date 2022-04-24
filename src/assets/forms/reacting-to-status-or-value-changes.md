We change know the current input or form status (valid or invalid) of the form or a specific formControl.

We use `this.signupForm` || `.get(<formControl path>)`

- `.valueChanges.subscribe((value) => /*your logic*/);`
- `.statusChanges.subscribe((value) => /*your logic*/);`


## Practice

console log form object, and there status on each input keystroke  

```ts
trackInputKeys() {
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
