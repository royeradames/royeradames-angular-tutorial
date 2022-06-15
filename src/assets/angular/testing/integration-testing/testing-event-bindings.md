We can select the element by css selector, and then trigger the html tag event.

`.triggerEventHandler(<event name>, <eventObj >)`
triggers an event on the element.


> keep your test simple
> `expect(component.totalVotes).toBe(1)` can be replace by checking the `<span class="vote-count">{{ totalVotes }}</span>` like in the previous test but the first option is simpler to implement.

## Practice

trigger the upvote button event and check that the totalVotes is incremented.

```ts
it('should increase total votes when I click the upvote button', () => {
  let button = fixture.debugElement.query(By.css('.glyphicon-menu-up')) 
  button.triggerEventHandler('click', null)

  expect(component.totalVotes).toBe(1)
})
  ```