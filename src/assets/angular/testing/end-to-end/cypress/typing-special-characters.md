We can simulate keyboard keys in the type command using `{<key name>}`. [List of commands](https://docs.cypress.io/api/commands/type#Arguments).

## Special character

```ts
.type('{Enter}')
```

```ts
cy.get('input')
  .type('This is a test {enter}')
```

