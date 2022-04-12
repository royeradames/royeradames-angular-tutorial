
Change CSS styles depending on the page

`routerLinkActive` toggles the class depending if the routerLink matches
- Added to wrapping or to the link itself 
`[routerLinkActiveOptions]="{ exact: true }"` lets angular know that it must be a 100% match. 
- Necessary for landing page route.

```html
<ul class="nav nav-tabs">
  <li
    role="presentation"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }"
  >
    <a routerLink="/">Home</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a routerLink="/servers">Servers</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a routerLink="/users">Users</a>
  </li>
</ul>
```