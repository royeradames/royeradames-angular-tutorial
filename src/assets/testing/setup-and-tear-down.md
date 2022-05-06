Common pattern

- Arranged: Innit system under test
- Act: calling a method or function
- Assert

Best practice to put a vertical line in the middle of each step

Arrangement is repeat for each test to solve that we can handle it globally but it can lead to side effects.

> Each test should run in an isolated environment.

- `beforeEach()` refer has **set up**. Runs before each test. Great for Arrangement
- `afterEach()` refer has **tear down**. Runs after each test. Great for clean up after each test
- `beforeAll()` runs before all tests 1 time
- `afterAll()` runs after all tests 1 time

## Practice

Set up the tests, and test the increment and decrement votes functions.

```ts
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when upvoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
```
 