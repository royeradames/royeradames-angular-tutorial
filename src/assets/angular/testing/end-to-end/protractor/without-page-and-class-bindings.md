With Protractor, it's common to load certain pages and target certain DOM elements over and over again. Page objects make these tasks much easier by creating an interface for your tests. We can test without that object. 

## Practice 

Create `app.e2e-spec.ts` and 
- test that header text is Active Users
- check that the list has 16 elements

```ts
// Browser lets us navigate to specified URLs in our app. Element lets us interact with DOM elements on a page and by lets us locate those elements by CSS or other selectors.
import { browser, element, by } from 'protractor';

// test happens in the call back of the describe function
describe('User list app', () => {
  // beforeEach runs function before a test is run
  beforeEach(async () => {
    // reload the page before each test
    // '/dashboard' is the relative path to our home page
    // note that unlike jasmine protractor is async by default. You will need to await function so that its ready before running the test
    await browser.get('/dashboard');
  });

  // test are define in the it function
  // first value is the name of the test
  // second value is a call back that holds all test logic
  it('should have a header', async () => {
    // we are targeting the app.component.html
    // by.css('') uses the same css selectors to select html
    const header = by.css('h2');

    //  We need to use the Element Function we imported to get the actual text from the DOM
    // there is more properties that we can get like css classes, and attributes

    const text = await element(header).getText();

    // To actually test our code, we use Jasmine's Expect Function
    // note that unlike jasmine protractor is async by default. You will need to await values you are expecting to that we can check them
    expect(text).toBe('Active Users');
  });

  it('should have 16 users on page load', async () => {
    const items = by.css('li');
    const users = element.all(items);

    expect(await users.count()).toBe(16);
  })
});

```