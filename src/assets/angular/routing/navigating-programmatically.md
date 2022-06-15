Navigate programmatically with `router.navigate`. The default is absolute path, and relative path you must use specify `{relativeTo: this.route}`

`{relativeTo: this.route}` 
- must be an active route. No string
- path given will only be the path define for the component in routerModule

`users.component.ts`
```js
constructor(private router: Router, private route: ActivatedRoute) {}

onLoadServers() {
  this.router.navigate(['/servers']);
}
onReload() {
  this.router.navigate(['/users'], {relativeTo: this.route});
}
```

`users.component.html`
```html
<h4>Welcome to Server Manager 4.0</h4>
<p>Manage your Servers and Users.</p>
<button class="btn btn-primary" (click)="onLoadServers()">Load Servers</button>
<button class="btn btn-primary" (click)="onReload()">Reload Page</button>
```

Relative path will through an error in the console log