It's the conversion to always have a `-` when creating angular (custom) HTML tags.

## Practice

Change the select from `<app-root></app-root>` root to `<wp-app></wp-app>`.

`app.component.ts`
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'wp-app',
    // selector: 'app-root',
    template: '<h1>My App</h1>'
})
export class AppComponent {}

```

`index.html`
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MeWL</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
<!--  <app-root></app-root> -->
    <wp-app></wp-app>
</body>
</html>

```