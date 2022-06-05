> ## setup
> - `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> - Start `target-app`
> - open `02_08/Start` in the vscode terminal
> - `npm i && npx cypress open`

We can add a global URL to all the `.visit()` commands by adding to the `cypress.json`

## Practice

> See solution on `02_08/End`

`cypress.json`

```ts
{
  "baseUrl": "http://localhost:3000/"
}
```