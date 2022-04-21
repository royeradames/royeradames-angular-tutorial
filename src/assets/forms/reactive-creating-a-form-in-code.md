`FormControl`

`FormGroup`
## Practice

Create the form structure in the component.ts file

```ts
import { FormControl, FormGroup } from '@angular/forms';

constructor() {
  this.singupForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    gender: new FormControl('male'),
  });
}
```
