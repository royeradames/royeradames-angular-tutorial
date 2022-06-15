

> E2e test cannot be run in the browser so we cannot have it pre-install has other Angular . We will need to setup a GitHub project and run the test locally.

## Install Cypress on an already existing project

`ng add @cypress/schematic`

This will install Cypress, add scripts for running Cypress in run and open mode, scaffold base Cypress files and directories, and (optional) prompt you to remove Protractor and reconfigure the default ng e2e command to use Cypress.

[Resource](https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress#Getting-Started)

With our schematic installed and Protractor removed, you can run Cypress in open mode with the following command:

`ng e2e`

> Note: you need to run the target-project from the github to follow the rest of the tutorial.
## Setup
- `gh repo clone royeradames/end-to-end-javascript-testing-with-cypress`
- Start `target-app`
- open `02_01/Start` in the vscode terminal
- `npm i && npx cypress open`

## Practice

Install a standalone version of Cypress and create our first new test.

- innit package.json `npm init -y`
- install cypress `npm i cypress -D`
- open cypress interface `npx cypress open`
- delete the documentation test that came with cypress. Make `/cypress/integration` empty.
- Create our first test `cypress/integration/first-test.spec.js`
  ![first test](assets/testing/end-to-end/cypress/installing-and-opening/first-test.png)
  - You will notice that it appears in cypress and if we lick run, it will notify that it's empty.