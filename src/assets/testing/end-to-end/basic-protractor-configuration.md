Protractor is Angular's official end-to-end testing framework. The Angular team made Protractor specifically for Angular apps, with full support for how Angular compiles these apps and generates DOM structures. Angular includes Protractor by default when you generate new projects using the CLI tool and it configures most of the settings for you so you can start testing your code right away. 

Here is a quick look at the Protractor's config file and `tsconfig.json`. They are located in the top level e-to-e folder.

## Practice

Explain what each field does

`protractor.conf.js`
```ts
// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// For enhancing the reporting feedback
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

// angular importing the config object
/**
 * @type { import("protractor").Config }
 */
// this is the config object itself
exports.config = {
  // maximum time a script can take to run
  // should be long enough for you app to stabilize
  allScriptsTimeout: 11000,

  // location to where protractor should look for test files
  // relative to the config file and accepts wild cards patterns 
  specs: [
    './src/**/*.e2e-spec.ts'
  ],

  // configure the browser instance
  // can set the maximum instances and log name files
  // can use the multi-capabilities array to use multiple browsers instead of capabilities object
  capabilities: {
    browserName: 'chrome'
  },

  // connect directly to the browser drivers
  // only for chrome and firefox

  // changes how protractor workflow is handle for web driver js
  directConnect: true,

  // false, run test async
  // true, run test sync
  SELENIUM_PROMISE_MANAGER: false,

  // appends this url to the relative URLs
  baseUrl: 'http://localhost:4200/',

  // protractor is a test runner. You still need a framework to run your tests
  // set the framework to run the tests
  // you can pass a custom framework if needed
  framework: 'jasmine',

  // sets options passed to jasmine
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  // protractor calls this function when is ready to execute tests
  // use for last minute setup before executing a test scripts
  // bellow it tells to find the tsconfig file and use pretty print for jasmine stack traces
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
  }
};
```

`protractor tsconfig.json`

```ts
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  // Extends the protractor.conf.js
  "extends": "../tsconfig.json",
  // tells protractor how to find and compile to ts
  "compilerOptions": {
    "outDir": "../out-tsc/e2e",
    "module": "commonjs",
    "target": "es2018",
    "types": [
      "jasmine",
      "node"
    ]
  }
}
```

