> ## setup
> `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> Start `target-app`
> open `02_06/Start` in the vscode terminal
> `npm i && npx cypress open`

We are able to use a `.then()` to have access to the dom element that cypress command returns.

> Not a promise. It's something else.

```ts
cy.get('@charsLeftSpan')
      // $charsLeftSpan is the dom element return by cy
      // .then my look like a promise but it is not
      // const charsLeftSpan =await cy.get(...) doesn't work because its not a real promise
      // 
      .then($charsLeftSpan => {
          // doesn't work: $charsLeftSpan.invoke('text').should('equal', '15');
          // we can use expect syntax from the Chai assertion library
          expect($charsLeftSpan.text()).to.equal('15');
      })
```



## Practice

> See solution on `02_06/End`

Replace `cy.get('@charsLeftSpan').invoke('text').should('equal', '15');` cy command in order to work with command results

```ts
describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
      cy.visit('http://localhost:3000/example-3');

      cy.get('[data-cy="last-name-chars-left-count"]')
          .as('charsLeftSpan');
      cy.get('[data-cy="input-last-name"]')
          .as('charInput');

      cy.get('@charsLeftSpan')
          // $charsLeftSpan is the dom element return by cy
          // .then my look like a promise but it is not
          // const charsLeftSpan =await cy.get(...) doesn't work because its not a real promise
          // 
          .then($charsLeftSpan => {
              // doesn't work: $charsLeftSpan.invoke('text').should('equal', '15');
              // we can use expect syntax from the Chai assertion library
              expect($charsLeftSpan.text()).to.equal('15');
          })

      cy.get('@charInput').type('hello');

      cy.get('@charsLeftSpan')
          .invoke('text')
          .should('equal', '10');

      cy.get('@charInput').type(' my friend');

      cy.get('@charsLeftSpan')
          .invoke('text')
          .should('equal', '0');
  });

  it('prevents the user from typing more characters once max is exceeded', () => {
      cy.visit('http://localhost:3000/example-3');

      cy.get('[data-cy="input-last-name"]')
          .as('charInput');

      cy.get('@charInput').type('abcdefghijklmnopqrstuvwxyz');

      cy.get('@charInput')
          .should('have.attr', 'value', 'abcdefghijklmno');
  });
});
```