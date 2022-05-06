We can subscribe to emitters to listen for events changes.

## Practice

Test the upVote emitter event changes

```ts
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when updated', () => {
    let totalVotes = null;
    component.voteChanged.subscribe((tv) => (totalVotes = tv));

    component.upVote();

    expect(totalVotes).toBe(1);
  });
});
```
