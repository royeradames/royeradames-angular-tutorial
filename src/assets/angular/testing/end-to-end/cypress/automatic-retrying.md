To solve flaky test, cypress will automatically retry tests until they pass or the default timeout (4s) is reached. We can change the timeout.

**Flaky tests** are test that pass most of the time but occasionally they fail unexpectedly. Commonly is due to a timing issue. A network call is taking longer than expected.

> Waiting an arbitrary amount of time to solve the flaky test is not a great solution
> Slow down testing
> Can still fail

Cypress won't retry interactive commands such as `.click()` or `.type()`. Why? Because they can cause inconsistent results if executed more than ones.

## cypress will only retry the command that fail

```ts
cy.get('@list')  // ✅ pass. Will not be retry
  .find('.list-item') // 🛑 fail. Will be retry
  .should('exist')
```

**Cypress will retry a failing command or assertion until it passes or until the timeout is reached.**