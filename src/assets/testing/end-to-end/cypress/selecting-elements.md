> ## setup
> `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> Start `target-app`
> open `02_04/Start` in the vscode terminal
> `npm i && npx cypress open`

The best way to select element in our test is by using special attribute on our elements. Recommended by cypress.

`data-cy="<name of element selector>"`

Other but not recommend ways to select elements are by HTML, HTML and CSS nth-of-type, CSS classes, HTML IDs, and selecting text.
## Using HTML tag

Dependent on the state of the app.
![select by html](assets/testing/end-to-end/cypress/images/select-by-html.png)

I will select all the instances of the tag. 
It will fail when trying to type on multiple elements on the same time.
attribute values will be concatenated. Like '15', '15' into '1515'.

Create selecting.spec.js and run this test

```ts
describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input').type('hello');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input').type(' my friend');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('input').type('abcdefghijklmnopqrstuvwxyz');

        cy.get('input')
            .should('have.attr', 'value', 'abcdefghijklmno');
    });
});
```

## Selecting by HTML and CSS nth-of-type

We can use indexes to specify which specific element we want to select.

Instead of using `nth-of-type(<number>)` we use `eq(<number>)`

Create/update selecting.spec.js and run this test

```ts
describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
      cy.visit('http://localhost:3000/example-3');

      cy.get('span')
          .eq(1)
          .invoke('text')
          .should('equal', '15');

      cy.get('input').eq(1).type('hello');

      cy.get('span')
      .eq(1)
          .invoke('text')
          .should('equal', '10');

      cy.get('input').eq(1).type(' my friend');

      cy.get('span')
      .eq(1)
          .invoke('text')
          .should('equal', '0');
  });

  it('prevents the user from typing more characters once max is exceeded', () => {
      cy.visit('http://localhost:3000/example-3');

      cy.get('input').eq(1).type('abcdefghijklmnopqrstuvwxyz');

      cy.get('input').eq(1)
          .should('have.attr', 'value', 'abcdefghijklmno');
  });
});
```

The problem with this approve is like HTML tag is to easy to change and break. The moment we add a new element or change order the tests are going to break.

## Selecting by CSS class

Better than css attributes or HTML tag but test can still break when our styles changes.

`cy.get(button.big-green)`

## Selecting by HTML id

Better but can still change when there is a big refactor.

## Selecting by text

Doesn't work well with dynamic text and it's subject to change.


## Practice

Replace html tag selectors with "data-cy" attributes

> See solution on `02_04/End`


```ts
describe('Text box with max characters', () => {
  it('displays the appropriate remaining characters count', () => {
      cy.visit('http://localhost:3000/example-3');

      cy.get('[data-cy="last-name-chars-left-count"]')
          .invoke('text')
          .should('equal', '15');

      cy.get('[data-cy="input-last-name"]').type('hello');

      cy.get('[data-cy="last-name-chars-left-count"]')
      
          .invoke('text')
          .should('equal', '10');

      cy.get('[data-cy="input-last-name"]').type(' my friend');

      cy.get('[data-cy="last-name-chars-left-count"]')
      
          .invoke('text')
          .should('equal', '0');
  });

  it('prevents the user from typing more characters once max is exceeded', () => {
      cy.visit('http://localhost:3000/example-3');

      cy.get('[data-cy="input-last-name"]').type('abcdefghijklmnopqrstuvwxyz');

      cy.get('[data-cy="input-last-name"]')
          .should('have.attr', 'value', 'abcdefghijklmno');
  });
});
```