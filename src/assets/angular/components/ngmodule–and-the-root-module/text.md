# Decorators

Expressions that validate to a function allowing annotation of classes at design time. 

![anatomy of decorator](assets/angular/components/ngmodule–and-the-root-module/anotomy-of-decorator.png)

The app module is the root module.

## Practice
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [],
})
export class AppModule {}

```