
For routing to work angular needs to know what path results in rendering a specific component, and where that component will be render.

## Let angular know what routes and component to use

`In app.module.ts`

Available routes are a list of objects that is imported to angular.

```ts
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UserComponent},
  { path: 'servers', component: ServerComponent},
]
imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  

```

- path string should'nt start with `/`
- component: tells what component to open when the path is matched
- RouterModule.forRoot(appRoutes): Lets angular know about the routes Go to

## Let angular know where to put the route component

`In app.component.html `

```ts 
<router-outlet></router-outlet>
```

- remove lines 16 - 25
- Replace app-home with router-outlet
- router-outlet: especial selective

Now if you add the path to the url, you will see does component loaded. 

`/users` will show the UserComponent


