```ts
import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',

    // css defaul scope is only to the component

    // /* inline css */
    // styles: [
    //   `
    //   h1 { color: #fff}
    // `,
    //   `
    // .description {
    //   font-style: italic;
    //   color: green;
    // }
    // `,
    // ],

    /* by files css */
    styleUrls: ['app.component.css']
})
export class AppComponent {}

```