We can populate the form whole form with `setValue` or partially with `patchValue`.

## Practice


```ts
 setStaticProfile() {
    this.signupForm.setValue({
      userData: {
        username: 'Max',
        email: 'max@test.com',
      },
      gender: 'male',
      hobbies: [],
    });
  }

  generateName() {
    this.signupForm.patchValue({
      userData: {
        username: 'Royer Adames',
      },
    });
  }
```

```html
<button class="btn btn-default" (click)="setStaticProfile()">
  Generate test user
</button>

<button class="btn btn-default" (click)="generateName()">
  Generate name
</button>
```