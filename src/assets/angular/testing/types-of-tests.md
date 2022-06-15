
- Unit
- Integration
- End-to-end

> When testing text always check for the text containing something instead of a exact match. Makes your test less fragile.

> Integration test in angular can be handle by the generate spec file, and the unit testing can be handle by creating a file `<component name>.unit.spec.ts`
> Or handle all unit and integration testing in the generated spec file.
## In this tutorial

- Integration tests: components + template
- Unit tests: component

## Unit Tests

Test a component in isolation, without external resources (e.g. file system, database, API endpoints).

In angular, is testing a component.ts with a fakeService and/or fakeRouter. (without its template)

- Easiest to write
- Super fast
- Don't give us mich confident 


### Limitations

Works with:

- State changes
- Forms
- Events (output properties)
- Services

Doesn't work with:

- Routers
- Template bindings

### Code coverage

`ng test --code-coverage`

Open `coverage/index.html`

#### How much code coverage?

- Ideally, 100% coverage.
- At lest 70% coverage.
- If constrain, then only focus on the key features. Things that take long to test manually.

## Integration Tests

Test a component with external resources (e.g. file system, database, API endpoints).

In angular, its testing the component.ts and component.html.

## End-to-end tests

Test the entire application as a whole

- More confidence
- Very slow
- Very fragile

## Allocation of time

- Unit / Integration: most of your test
- End-to-end: only for the core interaction with the application
