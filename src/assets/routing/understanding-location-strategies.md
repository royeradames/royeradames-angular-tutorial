When using a DNS, your DNS server first handles the url check before Angular can. You need to configure it so that it return the index.html when it cannot find a route instead of giving a 404, and not letting Angular handle it. 

You can use `useHash: true` to let the DNS server only worry about the left side of the `#` and let angular handle the rest. It doesn't look like a modern path but this can solve the issue.

## Practice

`imports: [RouterModule.forRoot(appRoutes, { useHash: true})],`

You notice a # in the url