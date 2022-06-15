We can use `.and` command to increase readability.

## The old way

```ts
cy.get('h1')
  .should(...)
  .should(...)
```

## New way

```ts
cy.get('h1')
  .should('have.text', 'Hello World')
  .and('have.text', 'Hello World')
```