import { Routes } from "@angular/router";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

export interface NotesInterface {
  id: number;
  chapter: string;
  section: string;
  aPath: string;
  bPath?: string;
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
    markdownPath: "assets/routing/welcome-to-angular.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/welcome-to-angular.md",
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
    markdownPath: "assets/routing/setting-up-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/setting-up-routes.md&hideExplorer=1",
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
    markdownPath: "assets/routing/router-link.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/router-link.md",
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
    markdownPath: "assets/routing/relative-vs-absolute-path.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/relative-vs-absolute-path.md",
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
    markdownPath: "assets/routing/styling-active-router-links.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/styling-active-router-links.md",
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
    markdownPath: "assets/routing/navigating-programmatically.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/navigating-programmatically.md",
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
    markdownPath: "assets/routing/route-parameters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/route-parameters.md",
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
    markdownPath: "assets/routing/query-parameters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/query-parameters.md",
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
    markdownPath: "assets/routing/nested-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/nested-routes.md",
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
    markdownPath: "assets/routing/redirecting-and-wildcard-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/redirecting-and-wildcard-routes.md",
  },
  {
    id: 11,
    chapter: "Routing",
    domainPath: "outsourcing-the-routes-configuration",
    markdownPath: "assets/routing/outsourcing-the-routes-configuration.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/outsourcing-the-routes-configuration.md",
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
    markdownPath: "assets/routing/guards-loading-route.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/guards-loading-route.md",
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
    markdownPath: "assets/routing/guards-leaving-route.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/guards-leaving-route.md",
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
    markdownPath:
      "assets/routing/passing-static-data-from-route-to-component.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/passing-static-data-from-route-to-component.md",
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
    markdownPath:
      "assets/routing/resolving-dynamic-data-with-the-resolve-guard.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/resolving-dynamic-data-with-the-resolve-guard.md",
    section: "Resolving dynamic data with the resolve guard",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-dcqt15?embed=1&file=src/app/servers/server/server.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-imgwe8?embed=1&file=src/app/servers/server/server-resolver.service.ts",
  },
  {
    id: 16,
    chapter: "Routing",
    domainPath: "understanding-location-strategies",
    markdownPath: "assets/routing/understanding-location-strategies.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/understanding-location-strategies.md",
    section: "Understanding location strategies",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-pw5wac?embed=1&file=src/app/app-routing.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-xxsbvw?embed=1&file=src/app/app-routing.module.ts",
  },
  {
    id: 17,
    chapter: "Forms",
    domainPath: "angular-forms-introduction",
    markdownPath: "assets/forms/angular-forms-introduction.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/angular-forms-introduction.md",
    section: "Understanding location strategies",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-o2xypm?embed=1&file=src/app/app.component.html",
  },
  {
    id: 18,
    chapter: "Forms",
    domainPath: "td-creating-the–form–and-registering-the-controls",
    markdownPath:
      "assets/forms/td-creating-the–form–and-registering-the-controls.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-creating-the–form–and-registering-the-controls.md",
    section: "TD Creating the form and registering the controls",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-xtzt2y?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-xuhc5x?embed=1&file=src/app/app.component.html",
  },
  {
    id: 19,
    chapter: "Forms",
    domainPath: "td-submitting-and-using-the-form",
    markdownPath: "assets/forms/td-submitting-and-using-the-form.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-submitting-and-using-the-form.md",
    section: "TD Submitting and using the form",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-bhmsih?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-bhmsih?devToolsHeight=33&embed=1&file=src/app/app.component.html",
  },
  {
    id: 20,
    chapter: "Forms",
    domainPath: "td-adding-validation-to-check-user-input",
    markdownPath: "assets/forms/td-adding-validation-to-check-user-input.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-adding-validation-to-check-user-input.md",
    section: "TD Adding validation to check user input",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-ugqjpr?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-fdatjy?devToolsHeight=33&embed=1&file=src/app/app.component.html",
  },
  {
    id: 21,
    chapter: "Forms",
    domainPath: "td-using-the-form-state",
    markdownPath: "assets/forms/td-using-the-form-state.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-using-the-form-state.md",
    section: "TD using the form state",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-3ua9r5?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-7ldd6r?embed=1&file=src/app/app.component.html",
  },
];

export function notesNav() {
  return notes.map((note) => ({
    link: "/" + note.domainPath,
    name: `${note.chapter} / ${note.section}`,
  }));
}
