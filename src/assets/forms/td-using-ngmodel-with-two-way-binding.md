We can set the initial value of the input and allow the input to change the store value.

`[(ngModel)]="yourVariable`

## Practice 

```html
<div class="form-group">
  <textarea
    name="questionAnswer"
    rows="3"
    class="form-control"
    [(ngModel)]="answer"
  ></textarea>
  <p>Your reply: {{ answer }}</p>
</div>
```

```ts
asnwer: string;
```