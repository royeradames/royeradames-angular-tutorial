> ## setup
> `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> Start `target-app`
> open `02_05/Start` in the vscode terminal
> `npm i && npx cypress open`

We can do aliases for complex selectors to simplify our code.

`cy.get('[data-cy="<name>"]').as('<alias name>');`

To use the alias we need to use `@` before the alias name.

`cy.get('@charsLeftSpan')`

> `const charsLeftSpan = await cy.get('[data-cy="<name>"]');`
> storing the select element in a variable doesn't work due cypress async nature
> await doesn't work because cypress commands are not technically promises

## Practice

> See solution on `02_05/End`

1. Duplicate `selecting.spec.js` and rename to `aliasing.spec.js`. 
2. Simplify element selection by using aliases.

```ts
describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
      cy.visit('http://localhost:3000/example-3');

      cy.get('[data-cy="last-name-chars-left-count"]').as('charsLeftSpan');
      cy.get('[data-cy="input-last-name"]').as('charInput');

      cy.get('@charsLeftSpan')
          .invoke('text')
          .should('equal', '15');

      
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
      cy.get('[data-cy="input-last-name"]').as('charInput');

      cy.get('@charInput').type('abcdefghijklmnopqrstuvwxyz');

      cy.get('@charInput')
          .should('have.attr', 'value', 'abcdefghijklmno');
  });
});
```
