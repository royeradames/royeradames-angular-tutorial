
test file are name <name>.spec.ts

`describe` groups similar tests together
`it` is a test

## Practice

Test the computer function. 

Create 01-fundamentals/compute.spec.ts

```ts
describe('computer', () => {
  it('should return 0 if inport is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
```