> ## setup
> `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> Start `target-app`
> open `03_01/Start` in the vscode terminal
> `npm i && npx cypress open`

There are many commands that cypress provided to interact with our application. 

> cypress will not run test if it doesn't have a `it()` function.

- [Double click](https://docs.cypress.io/api/commands/dblclick) `.dblclick()` 
- [check](https://docs.cypress.io/api/commands/check#Syntax) a checkbox `.check()`
- [select](https://docs.cypress.io/api/commands/select#Arguments) a dropdown option by the value `.select(<value>)`


## Practice

> See solution on `03_01/End`

On `/example-4`: 
1. sets the header text to the item's name when double clicked
2. displays the correct count for the number of selected checkboxes
3. displays the name of the currently selected item

```ts
describe('Basic page interactions', () => {
  beforeEach(() => {
      cy.visit('/example-4');
  });
  
  it('sets the header text to the item\'s name when double clicked', () => {
      cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
          .dblclick();

      cy.get('[data-cy=box-1-selected-name]')
          .invoke('text')
          .should('equal', 'Option Two');
  });

  it('displays the correct count for the number of selected checkboxes', () => {
      cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
          .check();

      cy.get('[data-cy=box-2-selected-count]')
          .invoke('text')
          .should('equal', '1');
  });

  it('displays the name of the currently selected item', () => {
      cy.get('[data-cy=box-3-dropdown]')
          .select('Option Three');

      cy.get('[data-cy=box-3-selected-name]')
          .invoke('text')
          .should('equal', 'Option Three');
  });
})
```