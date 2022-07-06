 ```ts
import { Component } from '@angular/core';


@Component(// need it to create components
//  meta object describes the css and html locations 
{
  selector: 'app-root',
  template: '<h1>My App</h1>',
})
export class AppComponent {}// component class is imported in the module

```