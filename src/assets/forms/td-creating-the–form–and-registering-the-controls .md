You need `FormsModule` to be import in your app module to be able to ue the template driven approach. Angular will not automatically scan and build a form for you, you need to guide it.

To register an input use:

- `ngModel`
- `name`

## practice

```ts
<input
  type="text"
  id="username"
  class="form-control"
  ngModel
  name="username"
/>

<input
  type="email"
  id="email"
  class="form-control"
  ngModel
  name="email"
/>

<select id="secret" class="form-control" ngModel name="secret">
```
