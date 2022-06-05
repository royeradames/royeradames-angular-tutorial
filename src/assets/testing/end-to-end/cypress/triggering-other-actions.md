> ## setup
> - `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> - Start `target-app`
> - open `03_02/Start` in the vscode terminal
> - `npm i && npx cypress open`


When we need specific actions to be use, we use `.trigger(<any event>)` command. Create for precise mouse combination.

> [Event list](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing)

## Practice

> See solution on `03_02/End`

display the name of the most recently hovered item in box 4

```ts
it("should display the name of the most recently hovered item", () => {
  cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
      .trigger('mouseover')
  
  cy.get('[data-cy=box-4-selected-name]')
      .invoke('text')
      .should('equal', 'Option Two');
})
```
