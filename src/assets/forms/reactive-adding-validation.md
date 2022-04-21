We can add validation by using `Validators` has the second option to `FormControl`. If we need to add more than one, then we use pass it has an array.

## Practice

Make the username require, and email require and must have a general email pattern.

```ts
import { FormControl, FormGroup, Validators } from '@angular/forms';

constructor() {
  this.signupForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('male'),
  });
}
```
