Run logic that if it only return true then it lets the path be change 

`canDeactivate`
`CanDeactivate`

To setup you need to change

1. Create a service that implement `CanDeactivate` that run canDeactivate function
2. import service
3. define `canDeactivate` in the route
4. implement service in the component.ts
5. have `canDeactivate` function that handle desire logic

## Practice

Prevent users from leaving the page if they are in the middle of a process. 

create `can-deactivate-guard.service.ts`

```ts
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate()
  }
}
```

`app.module.ts`
```ts
providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard],
```

`app-routing.module.ts`

```ts
{
  path: 'servers',
  canActivateChild: [AuthGuard],
  component: ServersComponent,
  children: [
    { path: ':id', component: ServerComponent },
    {
      path: ':id/edit',
      component: EditServerComponent,
      canDeactivate: [CanDeactivateGuard],
    },
  ],
},
```


`edit-server.components.ts`

```ts
export class EditServerComponent implements OnInit, CanDeactivateGuard

canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) return true;
    const userChangeField =
      this.serverName !== this.server.name ||
      this.serverStatus !== this.server.status;
    if (userChangeField && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    return true;
  }
```