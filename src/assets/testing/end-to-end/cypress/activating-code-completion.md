> ## setup
> `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> Start `target-app`
> open `04_05/Start` in the vscode terminal 
> Run `npm i && npx cypress open`

Cypress comes with TypeScript type declarations included. Modern text editors can use these type declarations to [show IntelliSense inside spec files](https://docs.cypress.io/guides/tooling/IDE-integration#Writing-Tests).

## triple slash directives 

In the first line of the test.

`/// <reference types="cypress" />`

Great for activating the autocompletion per file.

## (Global autocompletion) Reference type declarations via jsconfig

in `jsconfig.json`

```ts
{
  "include": ["./node_modules/cypress", "cypress/**/*.js"]
}
```

> not working on our project

## Reference type declarations via tsconfig

```ts
{
  "compilerOptions": {
    "allowJs": true,
    "types": ["cypress"]
  },
  "include": ["**/*.*"]
}
```