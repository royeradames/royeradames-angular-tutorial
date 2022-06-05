> ## setup
> - `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> - Start `target-app`
> - open `02_03/Start` in the vscode terminal
> - `npm i && npx cypress open`

`cy.get(<selector>).type(<string>)`
We select an input and insert the string

`cy.get(<selector>).should('have.attr', 'value', <expected value>)`
check that the selected element attribute name value has the expected value

`cy.get(<selector>).invoke('text')`
lets us test the inner html content 

`.should('equal', <expected value>)`
check that the selected element matches exactly the expected value

## Practice

create new test `cypress/integration/max-chart-input.spec.js`, and check that the input lower the allow char number when user types and that no more than 15 characters are allow in the input.

> See solution on `02_03/End`

```ts
describe('Text box with max characters', () => {
  it("displays the appropriate remaining characters count", () => {
    cy.visit("http://localhost:3000/example-2");
    cy.get('span').invoke('text').should('equal', '15')

    cy.get('input').type('hello')
    cy.get('span').invoke('text').should('equal', '10')

    cy.get('input').type(' my friend')
    cy.get('span').invoke('text').should('equal', '0')

  })

  it('should prevent users from typing more characters after max is exceeded', () => {
    cy.visit("http://localhost:3000/example-2");
    cy.get('input').type("abcdefghijklmnopqrstuvwxyx")

    cy.get('input').should('have.attr', 'value', 'abcdefghijklmno')
  })
})
```