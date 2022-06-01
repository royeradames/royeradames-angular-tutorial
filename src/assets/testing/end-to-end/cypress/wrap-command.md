
We could wrap the cy return target into cy, and use cy commands so that [chai](https://www.chaijs.com/) commands are not require.

## The Old way

Using chai expect syntax

```ts
cy.get('h1').then($element => {
  //cannot use cy commands like $element.should()
  expect($element)//...
})
```

## The new way

To keep consistency using cy commands to test our code.

```ts
cy.get('h1').then($element => {
  cy.wrap($element).should('have.text', 'Hello World')
})
```
