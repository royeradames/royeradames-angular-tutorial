We can select a subset of elements with filter and not commands.

## The commands

- `cy.get(...).filter()`
- `cy.get(...).not()`

## Example

```ts
<div id="content-container">
  <h1>...</h1>
  <p>...</p>
  <h3>...</h3>
  <p>...</p>
  <p>...</p>
</div>
```

Only select paragraphs.
```ts
cy.get('#content-container')
  .filter('p')
```

Select everything beside the paragraphs.
```ts
cy.get('#content-container')
  .not('p')
```
