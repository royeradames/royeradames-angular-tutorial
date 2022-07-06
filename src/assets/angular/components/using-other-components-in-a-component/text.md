Components are essentially directives with a view.

Component must be declared in the module file
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, MediaItemComponent], //declare MediaItemComponent
    bootstrap: [AppComponent],
})
export class AppModule {}
```

Then we can use their selector tag in other components that has been declared by the same module

`app.component.html`
```html
<section>
    <header>
        <h1>Media Watch List</h1>
    <p class="description">Keeping track of the media I want to watch.</p>
    </header>
    <mw-media-item></mw-media-item>
</section>
```

> component selector tag cannot be self-closing 