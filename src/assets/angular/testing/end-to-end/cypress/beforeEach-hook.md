> ## setup
> - `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> - Start `target-app`
> - open `02_07/Start` in the vscode terminal
> - `npm i && npx cypress open`

We can use `beforeEach()` to run code before each test.


## Practice

> See solution on `02_07/End`

1. Duplicate `aliasing.spec.js` and rename to `before-each.spec.js`
2. Move `.visit()`, and aliases to a `beforeEach()`


```ts
describe("Text box with max characters", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/example-3");

    cy.get('[data-cy="last-name-chars-left-count"]').as("charsLeftSpan");
    cy.get('[data-cy="input-last-name"]').as("charInput");
  });
  it("displays the appropriate remaining characters count", () => {
    cy.get("@charsLeftSpan").invoke("text").should("equal", "15");

    cy.get("@charInput").type("hello");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "10");

    cy.get("@charInput").type(" my friend");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "0");
  });

  it("prevents the user from typing more characters once max is exceeded", () => {
    cy.get("@charInput").type("abcdefghijklmnopqrstuvwxyz");

    cy.get("@charInput").should("have.attr", "value", "abcdefghijklmno");
  });
});

```