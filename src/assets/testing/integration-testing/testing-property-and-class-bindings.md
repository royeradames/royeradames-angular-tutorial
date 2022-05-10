We can get accesss to the html element, check classes, update components variables, run class method and expect the results.

We get access to a boiler plate tag text by 
```ts
let de = fixture.debugElement.query(By.css('.vote-count'));
let el: HTMLElement = de.nativeElement; // to get access intellisense due to de.nativeElement being set to any type
```

`By`
- `.css` select html by css selector
- `.directive` select html by directive


detect changes need to be done manually:

`fixture.detectChanges();`

Debug element object has properties for checking classes:
- `.classes['some-class']`
- `.attributes['some-attribute']`
- `.styles['some-style']`

## Practice

Check that totalVotes is rendering, and that class highlighted is added to the element when the vote is clicked.

```ts
it('should render total votes', () => {
  component.othersVote = 20;
  component.myVote = 1;
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.vote-count'));

  let el: HTMLElement = de.nativeElement;

  expect(el.innerText).toContain('21');

});
it('should highlight the upvote button if I have upvoted', () => {
  component.myVote = 1;
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

  expect(de.classes['highlighted']).toBeTruthy();
});
```