import { Routes } from "@angular/router";
import { TemplateComponent } from "./template.component";

export interface NotesInterface {
  id: number;
  chapter: string;
  section: string;
  aPath: string;
  bPath: string;
  markdownPath: string;
  editPath: string;
  domainPath: string;
}

export const notes: NotesInterface[] = [
  {
    id: 6,
    domainPath: "",
    chapter: "Introduction",
    section: "Welcome to Angular",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-sszhpy?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-sszhpy?embed=1&file=src/app/app.component.html",
    markdownPath: "assets/welcome-to-angular.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/welcome-to-angular.md",
  },
  {
    id: 1,
    domainPath: "setting-up-and-loading-routes",
    chapter: "Routing",
    section: "Setting up and loading routes",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-4rloit?embed=1&file=src/app/app.module.ts&hideExplorer=1",
    markdownPath: "assets/setting-up-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/setting-up-routes.md&hideExplorer=1",
  },
  {
    id: 2,
    domainPath: "links",
    chapter: "Routing",
    section: "Links",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-ou51xf?embed=1&file=src/app/app.component.html&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-y71jmy?embed=1&file=src/app/app.component.html&hideExplorer=1",
    markdownPath: "assets/router-link.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/router-link.md",
  },
  {
    id: 3,
    domainPath: "relative-vs-absolute-path",
    chapter: "Routing",
    section: "Relative vs absolute path",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-mdyp2r?file=src/app/servers/servers.component.html&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-zrnbkv?embed=1&file=src/app/servers/servers.component.html",
    markdownPath: "assets/relative-vs-absolute-path.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/relative-vs-absolute-path.md",
  },
  {
    id: 4,
    domainPath: "styling-active-router-links",
    chapter: "Routing",
    section: "Styling active router links",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-8mcz3h?embed=1&file=src/app/app.component.html&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-q3qvxv?embed=1&file=src/app/app.component.html&hideExplorer=1",
    markdownPath: "assets/styling-active-router-links.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/styling-active-router-links.md",
  },
  {
    id: 5,
    domainPath: "navigating-with-javascript",
    chapter: "Routing",
    section: "Navigating with Javascript",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-l77w2z?embed=1&file=src/app/users/users.component.ts&devToolsHeight=33",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-vuymfc?embed=1&file=src/app/users/users.component.ts&devToolsHeight=33",
    markdownPath: "assets/navigating-programmatically.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/navigating-programmatically.md",
  },
  {
    id: 7,
    domainPath: "route-parameters",
    chapter: "Routing",
    section: "Route parameters",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-vuymfc?embed=1&file=src/app/users/user/user.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-mii2hv?embed=1&file=src/app/users/user/user.component.ts",
    markdownPath: "assets/route-parameters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/route-parameters.md",
  },
  {
    id: 8,
    domainPath: "query-parameters",
    chapter: "Routing",
    section: "Query parameters",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-p4mscs?embed=1&file=src/app/app.module.ts&devToolsHeight=33",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-whznye?embed=1&file=src/app/app.module.ts&devToolsHeight=33",
    markdownPath: "assets/query-parameters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/query-parameters.md",
  },
  {
    id: 9,
    domainPath: "nested-routes",
    chapter: "Routing",
    section: "Nested routes",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-xatedq?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-bsaf3p?embed=1&file=src/app/app.module.ts",
    markdownPath: "assets/nested-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/nested-routes.md",
  },
  {
    id: 10,
    domainPath: "redirecting-and-wildcard-routes",
    chapter: "Routing",
    section: "Redirecting and wildcard routes",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-3oiczz?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-yydpre?embed=1&file=src/app/app.module.ts",
    markdownPath: "assets/redirecting-and-wildcard-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/redirecting-and-wildcard-routes.md",
  },
  {
    id: 11,
    chapter: "Routing",
    domainPath: "outsourcing-the-routes-configuration",
    markdownPath: "assets/outsourcing-the-routes-configuration.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/outsourcing-the-routes-configuration.md",
    section: "Outsourcing the routes configuration",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-lqkinq?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-czd2hz?embed=1&file=src/app/app-routing.module.ts",
  },
  {
    id: 12,
    chapter: "Routing",
    domainPath: "guards-loading-route",
    markdownPath: "assets/guards-loading-route.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/guards-loading-route.md",
    section: "Guards loading route",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-u6pvhp?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-kmdu7i?embed=1&file=src/app/auth.service.ts",
  },
  {
    id: 13,
    chapter: "Routing",
    domainPath: "guards-leaving-route",
    markdownPath: "assets/guards-leaving-route.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/guards-leaving-route.md",
    section: "Guards leaving route",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-hgl21t?embed=1&file=src/app/servers/edit-server/edit-server.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-ycas2f?embed=1&file=src/app/servers/edit-server/edit-server.component.ts",
  },
  {
    id: 14,
    chapter: "Routing",
    domainPath: "passing-static-data-from-route-to-component",
    markdownPath: "assets/passing-static-data-from-route-to-component.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/passing-static-data-from-route-to-component.md",
    section: "Passing static data from route to component",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-snyzef?embed=1&file=src/app/app-routing.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-rjacpn?embed=1&file=src/app/app-routing.module.ts",
  },
  {
    id: 15,
    chapter: "Routing",
    domainPath: "resolving-dynamic-data-with-the-resolve-guard",
    markdownPath: "assets/resolving-dynamic-data-with-the-resolve-guard.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/resolving-dynamic-data-with-the-resolve-guard.md",
    section: "Resolving dynamic data with the resolve guard",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-dcqt15?embed=1&file=src/app/servers/server/server.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-imgwe8?embed=1&file=src/app/servers/server/server-resolver.service.ts",
  },
];

export function notesNav() {
  return notes.map((note) => ({
    link: "/" + note.domainPath,
    name: `${note.chapter} / ${note.section}`,
  }));
}
