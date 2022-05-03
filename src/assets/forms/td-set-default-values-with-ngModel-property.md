You can give any input a default values by setting `ngModel` to a variable. For select it matches the option value.

## Practice

```html
<select
  id="secret"
  class="form-control"
  ngModel
  name="secret"
  [ngModel]="defaultQuestion"
>
```

```ts
defaultQuestion = 'pet';
```
