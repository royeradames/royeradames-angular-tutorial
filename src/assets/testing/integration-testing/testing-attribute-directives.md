We can test directives by creating the necessary template and expecting the correct changes.

## Practice

Test that the custom directive works properly. 

```ts
@Component({
  template: `
  <p highlight="cyan">First</p>
  <p highlight>Second</p>
  `,
})

it('should highlight the first element with cyan', () => {
  const de = fixture.debugElement.queryAll(By.css('p'))[0];

  expect(de.nativeElement.style.backgroundColor).toBe('cyan');
});
it('should highlight the second element with default color', () => {
  let de = fixture.debugElement.queryAll(By.css('p'))[1];

  const directive = de.injector.get(HighlightDirective);

  expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
});
```