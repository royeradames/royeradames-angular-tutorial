
- Unit
- Integration
- End-to-end

```ts
export class VoteComponent {
  totalVotes: number;

  update() {
    this.totalVotes++;
  }
}
```

```html
{{ totalVotes }}

<button (click)="upVote()"> Up </button>
```

## In this tutorial

- Integration tests: components + template
- Unit tests: component

## Unit Tests

Test a componenet in isolation, without external resources (e.g. file system, database, API endpoints).

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

## Integration Tests

Test a component with external resources (e.g. file system, database, API endpoints).

In angular, its testing the component.ts and component.html.

## End-to-end tests

Test teh entire application as a whole

- More confidence
- Very slow
- Very fragile

## Allocation of time

- Unit / Integration: most of your test
- End-to-end: only for the core interaction with the application
