Test shouldn't be fragile

When testing string it's more robust to check for the test containing a substring, and not caring for the order that it shows up in.

`toContain(<substring>)` is a matcher that checks if the actual value contains the given substring. Also can check every list of string to see if it contains the given substring.

## Practice

Check that the given greet name string is returning, and that the currency names are returning.

Create 02-arrays-and-strings/greet.spec.ts

```ts
import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    expect(greet('mosh')).toContain('mosh')
  });
});
```

Create 02-arrays-and-strings/getCurrencies.spec.ts

```ts
import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
```
