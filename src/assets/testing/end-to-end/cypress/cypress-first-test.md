> ## setup
> `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> Start `target-app`
> open `02_02/Start` in the vscode terminal
> `npm i && npx cypress open`

If you're familiar with the Mocha test framework, the syntax for organizing your Cypress tests will look very familiar. And that's because it is Mocha.

Mocha
- describe()
  - test happens in the call back of the describe function
- it()
  - test are define in the it function
  - first value is the name of the test
  - second value is a call back that holds all test logic

All cypress commands start with `cy`.
- `cy.visit()` goes to the provided URL
- `.invoke()` is used to invoke a command on the element
- `.should()` is used to assert that the element has the expected state
- [`.contains()`](https://docs.cypress.io/api/commands/contains#Syntax) is used to assert that the element contains the expected text. 

## Practice

Check that the heading text contains the correct title

> see solution on `02_02/End`

```ts
describe("Heading text", () => {
  it('contains the correct title', () => {
    cy.visit('http://localhost:3000/example-1');
    cy.contains('h1', 'My Awesome Web Application')
  })
})
```
