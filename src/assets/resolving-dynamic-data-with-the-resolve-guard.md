Fetches data **before** displaying the route. Great for simplifying HTTP requests. Alternative you can fetch the data in the constructor with a spinner. 

`resolve` 
- must set a service that handles the logic. **No need for observables** because it executed each time
- in route sets the return service value in `activateRoute data` object
- can get the `this.route.data` when `private route: ActivatedRoute`

## Practice

Simplify how `servers.component.ts` fetches the servers data

In servers/server create `server-resolver.service.ts`

```ts
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server {
  id: number, name: string, status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService){}
resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Server |Observable<Server>|Promise<Server> {
  return this.serversService.getServer(+route.params['id'])
}

}
```

`app.module.ts`
`providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],`

`app-routing-module.ts`
`{ path: ':id', component: ServerComponent, resolve: { server: ServerResolver} },`

`server,component.ts`

```ts
ngOnInit() {
  this.route.data.subscribe(data => this.server = data['server'])
}
```