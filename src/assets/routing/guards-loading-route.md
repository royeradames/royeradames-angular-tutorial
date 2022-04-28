Functionality, logic, code which is executed before a route is loaded or once you want to leave a route. For example, user must be login to have access to a path.

A guard always need to be a service.
To guard a parent level route path you need to use `canActivate` in the parent route, and pass a class service that implements `CanActivate`.
To guard a child level route path you need to use `canActivateChild` in the parent route, and pass a class service that implements `CanActivateChild`

Create Guard

```ts
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) return true
      this.router.navigate([<Redirect path>])
    })
  }
}
```

Inform Angular about Guard in `.module.ts`
  
`providers: [<your guard>],`

Implement guard in `Routes`

```ts
canActivate: [AuthGuard],
canActivateChild: [AuthGuard],
```


## Practice 

Only allow access to servers routes when the user is logged in from the home page.

Create `auth-guard.service.ts` next to the `app.module.ts`

```ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) return true
      this.router.navigate(['/'])
    })
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

```

auth.server.ts

```ts
providers: [ServersService, AuthService, AuthGuard],
```

app-routing.module.ts

```ts
{
    path: 'servers',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
```
Comment out canActivate or canActivateChild to see the differences. 

Click on the servers table will take you to the home page after 8s. The 8s is how long the authentication check takes.