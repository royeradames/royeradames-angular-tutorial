We can import the dependencies we need to test our code in the `.configureTestingModule` method like if it was a `.module.ts` file.

> We cannot use the unit testing approaching when doing integration testing. `new <component> ( new <service>())` doesn't work due how we create the component `TestBed.CreateComponent(<component>)`.

## Practice

`npm run test` in new terminal window.

Import the TodoService and HttpModule that TodosComponent needs.

```ts
beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [HttpModule],
    declarations: [TodosComponent],
    providers: [TodoService],
  }).compileComponents();
}));
```
