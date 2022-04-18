You can add validation by adding attributes to the input.

`required` also in default input. Angular takes over it and works with it has a directive. 
`email` only in angular. Checks that the email has a valid email pattern

## Practice

```ts
<input
  type="text"
  id="username"
  class="form-control"
  ngModel
  name="username"
  required
/>
<input
  type="email"
  id="email"
  class="form-control"
  ngModel
  name="email"
  required
  email
/>
```

You will notice in the console that when you submit the form the form status is valid or invalid if it was fill correctly.
