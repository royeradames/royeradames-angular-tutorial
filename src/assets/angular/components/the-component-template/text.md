```ts
import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
    // inline html. 
  // template: `
  // <h1>My App</h1>
  // <p>Keeping track of the media I want to watch.</p> 
  // ` , 
    templateUrl: "./app.component.html" //We can also do it by file.
})
export class AppComponent {}

```