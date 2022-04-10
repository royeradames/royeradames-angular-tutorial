
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
  
<router-outlet></router-outlet>
```

Go to app.module.ts path string should'nt start with `/` component: tells
what component to open when the path is matched
RouterModule.forRoot(appRoutes): Lets angular know about the routes Go to
the app.component.html Only leave 1 route. Remove lines 16 - 25. Replace
app-home with router-outlet router-outlet: especial selective. Only shows
the route that matches the path now changing the url path to `/users` will
show the UserComponent
 