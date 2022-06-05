> ## setup
> `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
> - Start `target-app`
> - open `03_06/Start` in the vscode terminal
> - `npm i && npx cypress open`
> - [Resource](https://docs.cypress.io/guides/guides/environment-variables#Setting)

Environment variables are places in our tests that will change depending on where our tests are running. And this allows us to do things like change the URL that our tests visit, depending on whether or not our tests are running on our development server, our staging server, or our production server. And if done the right way, it also gives us a place to specify things like secret keys, since we definitely don't want to have our secret keys committed and pushed up to our git repo.

## Accessing environment variables in the test file

`Cypress.env('<variable name>')`

## Adding environment variables to machine

Set
`export CYPRESS_<variable name>=<value>`

unset
`unset CYPRESS_<variable name>`

>Cypress will strip off the CYPRESS_ when adding your environment variables.

Negative
- hard to see where the values are coming from
- Hard to share

> Didn't work on my mac but its hardly ever use in production. Just be aware of it.

## passing flag when running script

`npx cypress open --env MY_ENV_VARIABLE="HELLO FROM SCRIPT"`

> Remember to add this file to the gitignore so it doesn't get compromise in your github repo.

## In cypress.json

```json
{
  "baseUrl": "http://localhost:3000",
  "env": {
      "MY_ENV_VARIABLE": "HELLO from cypress.json"
  }
}
```

## cypress.env.json (production ready)

Create/update `cypress.env.json` next to `cypress.json`

```json
{
  "MY_ENV_VARIABLE": "HELLO from cypress.env.json"
}
```

## Practice

> See solution on `03_06/End`

Add an alert to interactions.spec.js and display the environment variable with all methods explain (except Adding environment variables to machine)

```ts
alert((Cypress.env('MY_ENV_VARIABLE')));
```