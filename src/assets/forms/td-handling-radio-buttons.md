`input`

`type="radio"` 

`name="<name for the input form group>"` 

`ngModel` 

`[value]="<value set when the radio is clicked>"`

## Practice

Add radio buttons

```ts
genders = ['male', 'female'];
```

```html
<div class="form-group">
  <textarea
    name="questionAnswer"
    rows="3"
    class="form-control"
    [(ngModel)]="answer"
  ></textarea>
  <p>Your reply: {{ answer }}</p>
  <div class="radio" *ngFor="let gender of genders">
    <label >
      <input type="radio" name="gender" ngModel [value]="gender">
      {{gender}}
    </label>
  </div>
</div>
```

See the control form in the console. You may need to deselect your console `selected context only`.