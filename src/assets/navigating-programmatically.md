Trigger a page navigation through the code with `router.navigate`

`home.component.ts`
```js
constructor(private router: Router) {}

onLoadServers() {
  // ... Your code
  this.router.navigate(['/servers']);
}
```

`home.component.html`
```html
<h4>Welcome to Server Manager 4.0</h4>
<p>Manage your Servers and Users.</p>
<button class="btn btn-primary" (click)="onLoadServers()">Load Servers</button>
```