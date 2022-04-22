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
    chapter: "Form",
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
    chapter: "Template driven form",
    domainPath: "td-creating-the–form–and-registering-the-controls",
    markdownPath:
      "assets/forms/td-creating-the–form–and-registering-the-controls.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-creating-the–form–and-registering-the-controls.md",
    section: "Creating the form and registering the controls",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-xtzt2y?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-xuhc5x?embed=1&file=src/app/app.component.html",
  },
  {
    id: 19,
    chapter: "Template driven form",
    domainPath: "td-submitting-and-using-the-form",
    markdownPath: "assets/forms/td-submitting-and-using-the-form.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-submitting-and-using-the-form.md",
    section: "Submitting and using the form",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-bhmsih?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-bhmsih?devToolsHeight=33&embed=1&file=src/app/app.component.html",
  },
  {
    id: 20,
    chapter: "Template driven form",
    domainPath: "td-adding-validation-to-check-user-input",
    markdownPath: "assets/forms/td-adding-validation-to-check-user-input.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-adding-validation-to-check-user-input.md",
    section: "Adding validation to check user input",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-ugqjpr?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-fdatjy?devToolsHeight=33&embed=1&file=src/app/app.component.html",
  },
  {
    id: 21,
    chapter: "Template driven form",
    domainPath: "td-using-the-form-state",
    markdownPath: "assets/forms/td-using-the-form-state.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-using-the-form-state.md",
    section: "Using the form state",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-3ua9r5?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-7ldd6r?embed=1&file=src/app/app.component.html",
  },
  {
    id: 22,
    chapter: "Template driven form",
    domainPath: "td-outputting-validation-error-messages",
    markdownPath: "assets/forms/td-outputting-validation-error-messages.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-outputting-validation-error-messages.md",
    section: "Outputting validation error message",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-wqg434?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-c2p9c7?embed=1&file=src/app/app.component.html",
  },
  {
    id: 23,
    chapter: "Template driven form",
    domainPath: "td-set-default-values-with-ngModel-property",
    markdownPath: "assets/forms/td-set-default-values-with-ngModel-property.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-set-default-values-with-ngModel-property.md",
    section: "Set default values with ngModel property",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-gt53x4?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-bbekcq?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 24,
    chapter: "Template driven form",
    domainPath: "td-using-ngmodel-with-two-way-binding",
    markdownPath: "assets/forms/td-using-ngmodel-with-two-way-binding.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-using-ngmodel-with-two-way-binding.md",
    section: "Using ngModel with two way binding",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-dcurmy?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-c8vdcs?embed=1&file=src/app/app.component.html",
  },
  {
    id: 25,
    chapter: "Template driven form",
    domainPath: "td-grouping-form-controls",
    markdownPath: "assets/forms/td-grouping-form-controls.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-grouping-form-controls.md",
    section: "Grouping form controls",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-tjtsnx?devToolsHeight=33&embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-a4iavg?devToolsHeight=33&embed=1&file=src/app/app.component.ts",
  },
  {
    id: 26,
    chapter: "Template driven form",
    domainPath: "td-handling-radio-buttons",
    markdownPath: "assets/forms/td-handling-radio-buttons.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-handling-radio-buttons.md",
    section: "Handling radio buttons",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-cftfsl?devToolsHeight=33&embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-j4486h?devToolsHeight=33&embed=1&file=src/app/app.component.ts",
  },
  {
    id: 27,
    chapter: "Template driven form",
    domainPath: "td-setting-and-patching-form-values",
    markdownPath: "assets/forms/td-setting-and-patching-form-values.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-setting-and-patching-form-values.md",
    section: "Setting and patching form values",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-nlfg2q?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-peqgu7?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 28,
    chapter: "Template driven form",
    domainPath: "td-using-form-data",
    markdownPath: "assets/forms/td-using-form-data.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-using-form-data.md",
    section: "Using form data",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-sfd9fz?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-tmij5r?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 28,
    chapter: "Template driven form",
    domainPath: "td-resetting-forms",
    markdownPath: "assets/forms/td-resetting-forms.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/td-resetting-forms.md",
    section: "Resetting forms",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-vbtjud?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-yixav6?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 29,
    chapter: "Reactive form",
    domainPath: "reactive-setup",
    markdownPath: "assets/forms/reactive-setup.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-setup.md",
    section: "Setup",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-fmssbr?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-ugcary?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 30,
    chapter: "Reactive form",
    domainPath: "reactive-creating-a-form-in-code",
    markdownPath: "assets/forms/reactive-creating-a-form-in-code.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-creating-a-form-in-code.md",
    section: "Creating a form in code",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-zpfgun?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-axq2h2?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 31,
    chapter: "Reactive form",
    domainPath: "reactive-syncing-html-and-form",
    markdownPath: "assets/forms/reactive-syncing-html-and-form.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-syncing-html-and-form.md",
    section: "Syncing HTML and form",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-ebrhaa?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-xczfh9?embed=1&file=src/app/app.component.html",
  },
  {
    id: 32,
    chapter: "Reactive form",
    domainPath: "reactive-submitting-the-form",
    markdownPath: "assets/forms/reactive-submitting-the-form.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-submitting-the-form.md",
    section: "Submitting the form",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-6hhazz?file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-bfnr4p?embed=1&file=src/app/app.component.html",
  },
  {
    id: 33,
    chapter: "Reactive form",
    domainPath: "reactive-adding-validation",
    markdownPath: "assets/forms/reactive-adding-validation.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-adding-validation.md",
    section: "Adding validation",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-wyhwti?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-ip6tjv?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 34,
    chapter: "Reactive form",
    domainPath: "reactive-getting-access-to-controls",
    markdownPath: "assets/forms/reactive-getting-access-to-controls.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-getting-access-to-controls.md",
    section: "Getting access to controls",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-aq1xc6?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-k4rycu?embed=1&file=src/app/app.component.html",
  },
  {
    id: 35,
    chapter: "Reactive form",
    domainPath: "reactive-grouping-controls",
    markdownPath: "assets/forms/reactive-grouping-controls.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-grouping-controls.md",
    section: "Grouping controls",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-atwyqk?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-ryqiht?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 36,
    chapter: "Reactive form",
    domainPath: "reactive-arrays-of-form-controls",
    markdownPath: "assets/forms/reactive-arrays-of-form-controls.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-arrays-of-form-controls.md",
    section: "Arrays of form controls",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-28ytnz?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-6sypwa?embed=1&file=src/app/app.component.html",
  },
  {
    id: 37,
    chapter: "Reactive form",
    domainPath: "reactive-creating-custom-validators",
    markdownPath: "assets/forms/reactive-creating-custom-validators.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-creating-custom-validators.md",
    section: "Creating custom validators",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-drgzut?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-w5euj6?embed=1&file=src/app/app.component.ts",
  },
  {
    id: 38,
    chapter: "Reactive form",
    domainPath: "reactive-using-error-codes",
    markdownPath: "assets/forms/reactive-using-error-codes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-using-error-codes.md",
    section: "Using error codes",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-whjtxy?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-go658y?embed=1&file=src/app/app.component.html",
  },
];

export interface NotesNav {
  link: string;
  name: string;
  chapter?: string;
  chapterNumber?: number;
}

export function notesNav(): NotesNav[] {
  let previousChapter = "";
  let chapterNumber = 1;
  const alphabetStart = 64;
  const alphabetEnd = 90;
  let utfLetter = alphabetStart;
  const decoder = new TextDecoder();
  return notes.map((note) => {
    //
    const isNewChapter = note.chapter != previousChapter;
    const resetLetter = utfLetter === alphabetEnd || isNewChapter;
    if (resetLetter) utfLetter = alphabetStart;

    const alphabetLetter = decoder.decode(new Uint8Array([++utfLetter]));

    const nav: NotesNav = {
      link: "/" + note.domainPath,
      name: `${alphabetLetter}. ${note.section}`,
      chapter: isNewChapter ? note.chapter : undefined,
      chapterNumber: isNewChapter ? chapterNumber : undefined,
    };

    if (isNewChapter) {
      previousChapter = note.chapter;
      chapterNumber++;
    }

    return nav;
  });
}
