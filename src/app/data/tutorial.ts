export interface TutorialInterface {
  chapter: string;
  section: string;
  aPath?: string;
  bPath?: string;
  markdownPath: string;
  editPath: string;
  domainPath: string;
  githubPath?: string;
}

export const tutorials: TutorialInterface[] = [
  {
    domainPath: "",
    chapter: "Introduction",
    section: "Welcome to Angular",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-sszhpy?embed=1&file=src/app/app.component.ts&view=preview",

    markdownPath: "assets/routing/welcome-to-angular.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/welcome-to-angular.md",
  },
  {
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
    domainPath: "route-parameters-and-reloaded-components",
    chapter: "Routing",
    section: "Route parameters and reloaded components",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-vuymfc?embed=1&file=src/app/users/user/user.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-mii2hv?embed=1&file=src/app/users/user/user.component.ts",
    markdownPath: "assets/routing/route-parameters-and-reloaded-components.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/route-parameters-and-reloaded-components.md",
  },
  {
    domainPath: "query-and-fragment-parameters",
    chapter: "Routing",
    section: "Query and fragment parameters",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-p4mscs?embed=1&file=src/app/app.module.ts&devToolsHeight=33",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-whznye?embed=1&file=src/app/app.module.ts&devToolsHeight=33",
    markdownPath: "assets/routing/query-and-fragment-parameters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/routing/query-and-fragment-parameters.md",
  },
  {
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
    chapter: "Reactive form",
    domainPath: "reactive-custom-validators",
    markdownPath: "assets/forms/reactive-custom-validators.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-custom-validators.md",
    section: "Creating custom validators",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-drgzut?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-w5euj6?embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "Reactive form",
    domainPath: "reacting-custom-error-message",
    markdownPath: "assets/forms/reacting-custom-error-message.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reacting-custom-error-message.md",
    section: "Custom error message",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-whjtxy?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-go658y?embed=1&file=src/app/app.component.html",
  },
  {
    chapter: "Reactive form",
    domainPath: "reacting-to-status-or-value-changes",
    markdownPath: "assets/forms/reacting-to-status-or-value-changes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reacting-to-status-or-value-changes.md",
    section: "Reacting to status or value changes",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-tqxa86?devToolsHeight=33&embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-aml5u7?devToolsHeight=33&embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "Reactive form",
    domainPath: "reactive-setting-and-patching-values",
    markdownPath: "assets/forms/reactive-setting-and-patching-values.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/forms/reactive-setting-and-patching-values.md",
    section: "Setting and patching values",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-awgjva?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-dy8vrc?embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-anatomy-setup-and-post-request",
    markdownPath: "assets/http-requests/anatomy-setup-and-post-request.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/anatomy-setup-and-post-request.md",
    section: "Anatomy setup and post request",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-z15ggu?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-3zzler?embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-getting-data",
    markdownPath: "assets/http-requests/getting-data.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/getting-data.md",
    section: "Getting data",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-vfe4hm?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-heatfw?embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-transform-response-data",
    markdownPath: "assets/http-requests/transform-response-data.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/transform-response-data.md",
    section: "Transform response data",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-1op1wp?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-yjhtta?embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-showing-a-loading-indicator",
    markdownPath: "assets/http-requests/showing-a-loading-indicator.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/showing-a-loading-indicator.md",
    section: "Showing a loading indicator",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-jhgsjs?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-edyd4c?embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-delete-request",
    markdownPath: "assets/http-requests/delete-request.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/delete-request.md",
    section: "Delete request",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-38qlja?embed=1&file=src/app/posts.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-nkugiv?embed=1&file=src/app/posts.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-handling-errors",
    markdownPath: "assets/http-requests/handling-errors.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/handling-errors.md",
    section: "Handling errors",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-prepxy?embed=1&file=src/app/app.component.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-pev6kf?embed=1&file=src/app/app.component.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-subscribe-http-request-in-service",
    markdownPath: "assets/http-requests/subscribe-http-request-in-service.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/subscribe-http-request-in-service.md",
    section: "Subscribe HTTP request in the service",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-57wvqr?devToolsHeight=33&embed=1&file=src/app/posts.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-gp4zh3?devToolsHeight=33&embed=1&file=src/app/posts.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-error-handling-before-subscription",
    markdownPath: "assets/http-requests/error-handling-before-subscription.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/error-handling-before-subscription.md",
    section: "Error handling before subscription",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-4ke8b5?embed=1&file=src/app/posts.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-bmawrf?embed=1&file=src/app/posts.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-setting-headers",
    markdownPath: "assets/http-requests/setting-headers.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/setting-headers.md",
    section: "Setting headers",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-lczuqw?embed=1&file=src/app/posts.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-xqpeyy?embed=1&file=src/app/posts.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-adding-query-params",
    markdownPath: "assets/http-requests/adding-query-params.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/adding-query-params.md",
    section: "Adding query params",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-t8avkn?embed=1&file=src/app/posts.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-txifxl?embed=1&file=src/app/posts.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-observing-different-types-of-responses",
    markdownPath:
      "assets/http-requests/observing-different-types-of-responses.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/observing-different-types-of-responses.md",
    section: "Observing different types of responses",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-bdzwcm?embed=1&file=src/app/posts.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-r3rqxc?embed=1&file=src/app/posts.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-changing-the-response-body-type",
    markdownPath: "assets/http-requests/changing-the-response-body-type.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/changing-the-response-body-type.md",
    section: "Changing the response body type",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-k7q37x?devToolsHeight=33&embed=1&file=src/app/posts.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-koprlg?devToolsHeight=33&embed=1&file=src/app/posts.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath:
      "http-requests-setup-interceptors-and-manipulating-request-object",
    markdownPath:
      "assets/http-requests/setup-interceptors-and-manipulating-request-object.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/setup-interceptors-and-manipulating-request-object.md",
    section: "Setup interceptors and manipulating request object",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-7n5i9s?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-ied5me?embed=1&file=src/app/auth-interceptor.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-response-interceptors",
    markdownPath: "assets/http-requests/response-interceptors.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/response-interceptors.md",
    section: "Response Interceptors",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-r8useb?embed=1&file=src/app/auth-interceptor.service.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-7gvydn?embed=1&file=src/app/auth-interceptor.service.ts",
  },
  {
    chapter: "HTTP requests",
    domainPath: "http-requests-multiple-interceptors",
    markdownPath: "assets/http-requests/multiple-interceptors.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/http-requests/multiple-interceptors.md",
    section: "Multiple interceptors",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-d9h93k?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-qz4hv4?devToolsHeight=33&embed=1&file=src/app/auth-interceptor.service.ts",
  },
  {
    chapter: "Testing",
    domainPath: "unit-testing-types-of-tests",
    markdownPath: "assets/testing/types-of-tests.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/types-of-tests.md",
    section: "Types of tests",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-38wwgf?embed=1&file=src/app/app.component.spec.ts&view=both",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-unit-testing-fundamentals",
    markdownPath: "assets/testing/unit-testing/unit-testing-fundamentals.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/unit-testing-fundamentals.md",
    section: "Unit testing fundamentals",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-qvirpk?embed=1&file=src/app/01-fundamentals/compute.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-weqmbf?embed=1&file=src/app/01-fundamentals/compute.spec.ts",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-working-with-strings-and-arrays",
    markdownPath:
      "assets/testing/unit-testing/working-with-strings-and-arrays.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/working-with-strings-and-arrays.md",
    section: "Working with strings and arrays",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-aqkfk5?embed=1&file=src/app/02-arrays-and-strings/greet.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-m2knic?embed=1&file=src/app/02-arrays-and-strings/getCurrencies.spec.ts",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-setup-and-tear-down",
    markdownPath: "assets/testing/unit-testing/setup-and-tear-down.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/setup-and-tear-down.md",
    section: "Setup and tear down",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-5qkkf6?embed=1&file=src/app/03-setup-and-terdown/vote.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-rhj2ry?embed=1&file=src/app/03-setup-and-terdown/vote.component.spec.ts",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-working-with-forms",
    markdownPath: "assets/testing/unit-testing/working-with-forms.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/working-with-forms.md",
    section: "Working with forms",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-w5xzx9?embed=1&file=src/main-testing.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-zkehdk?embed=1&file=src/main-testing.ts",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-working-with-event-emitters",
    markdownPath: "assets/testing/unit-testing/working-with-event-emitters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/working-with-event-emitters.md",
    section: "Working with event emitters",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-qqawn5?embed=1&file=src/app/05-event-emitters/vote.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-ky9qfd?embed=1&file=src/app/05-event-emitters/vote.component.spec.ts",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-working-with-spies",
    markdownPath: "assets/testing/unit-testing/working-with-spies.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/working-with-spies.md",
    section: "Working with spies",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-e6hb1t?embed=1&file=src/main-testing.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-r8bqsj?embed=1&file=src/main-testing.ts",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-interaction-testing",
    markdownPath: "assets/testing/unit-testing/interaction-testing.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/interaction-testing.md",
    section: "Interaction testing",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-q72zqj?embed=1&file=src/app/06-services/todos.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-nzn1ya?embed=1&file=src/app/06-services/todos.component.spec.ts",
  },
  {
    chapter: "Unit testing",
    domainPath: "unit-testing-working-with-confirmation-boxes",
    markdownPath:
      "assets/testing/unit-testing/working-with-confirmation-boxes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/unit-testing/working-with-confirmation-boxes.md",
    section: "Working with Confirmation Boxes",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-ro9w6r?embed=1&file=src/app/06-services/todos.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-y5u48u?embed=1&file=src/app/06-services/todo.service.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-the-setup-code",
    markdownPath: "assets/testing/unit-testing/working-with-spies.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/the-setup-code.md",
    section: "The setup code",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-cpyd6m?embed=1&file=src/app/1-voter/voter.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-ka6odk?embed=1&file=src/app/1-voter/voter.component.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-testing-property-and-class-bindings",
    markdownPath:
      "assets/testing/integration-testing/testing-property-and-class-bindings.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/testing-property-and-class-bindings.md",
    section: "Testing property and class bindings",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-48nkgs?embed=1&file=src/app/1-voter/voter.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-tnbhpi?embed=1&file=src/main-testing.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-testing-event-bindings",
    markdownPath:
      "assets/testing/integration-testing/testing-event-bindings.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/testing-event-bindings.md",
    section: "Testing event bindings",
    aPath:
      "https://stackblitz.com/edit/jasmine-in-angular-qqg9vi?embed=1&file=src/app/1-voter/voter.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/jasmine-in-angular-jppkp2?embed=1&file=src/app/1-voter/voter.component.html",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-providing-the-dependencies",
    markdownPath:
      "assets/testing/integration-testing/providing-the-dependencies.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/providing-the-dependencies.md",
    section: "Providing the dependencies",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-7rqnh8?embed=1&file=src/app/2-todos/todos.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-3ppv9w?embed=1&file=src/app/2-todos/todos.component.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-getting-the-dependencies",
    markdownPath:
      "assets/testing/integration-testing/getting-the-dependencies.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/getting-the-dependencies.md",
    section: "Getting the dependencies",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-ps33lc?embed=1&file=src/app/2-todos/todos.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-qbhrwj?embed=1&file=src/app/2-todos/todos.component.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-providing-stubs",
    markdownPath: "assets/testing/integration-testing/providing-stubs.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/providing-stubs.md",
    section: "Providing stubs",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-sjuwew?embed=1&file=src/app/user-details/user-details.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-8eapid?embed=1&file=src/app/user-details/user-details.component.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-testing-the-navigation",
    markdownPath:
      "assets/testing/integration-testing/testing-the-navigation.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/testing-the-navigation.md",
    section: "Testing the navigation",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-15vp2s?embed=1&file=src/app/user-details/user-details.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-3mo7g5?embed=1&file=src/app/user-details/user-details.component.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-dealing-with-route-parameters",
    markdownPath:
      "assets/testing/integration-testing/dealing-with-route-parameters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/dealing-with-route-parameters.md",
    section: "Dealing with route parameters",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-2wdpw3?embed=1&file=src/app/user-details/user-details.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-j4fy2c?embed=1&file=src/app/user-details/user-details.component.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-testing-router-outlet-components",
    markdownPath:
      "assets/testing/integration-testing/testing-router-outlet-components.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/testing-router-outlet-components.md",
    section: "Testing router outlet components",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-tdp4rz?embed=1&file=src/app/app.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-d4uaf8?embed=1&file=src/app/app.component.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-shallow-component-tests",
    markdownPath:
      "assets/testing/integration-testing/shallow-component-tests.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/shallow-component-tests.md",
    section: "Shallow component tests",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-zsftuz?embed=1&file=src/app/app.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-yrzbyd?embed=1&file=src/app/nav/nav.component.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-testing-attribute-directives",
    markdownPath:
      "assets/testing/integration-testing/testing-attribute-directives.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/testing-attribute-directives.md",
    section: "Testing attribute directives",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-hjxa1v?embed=1&file=src/app/highlight.directive.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-dvqrme?embed=1&file=src/app/highlight.directive.spec.ts",
  },
  {
    chapter: "Integration testing",
    domainPath: "integration-testing-dealing-with-asynchronous-operations",
    markdownPath:
      "assets/testing/integration-testing/dealing-with-asynchronous-operations.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/integration-testing/dealing-with-asynchronous-operations.md",
    section: "Dealing with asynchronous operations",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-fuzibp?embed=1&file=src/app/todos/todos.component.spec.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-ozvmfk?embed=1&file=src/app/todos/todos.component.spec.ts",
  },
  {
    chapter: "protractor",
    domainPath: "protractor-basic-protractor-configuration",
    markdownPath:
      "assets/testing/end-to-end/protractor/basic-protractor-configuration.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/protractor/basic-protractor-configuration.md",
    section: "Basic protractor configuration",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-aahexv?embed=1&file=e2e/protractor.conf.js",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-xt7vzm?embed=1&file=e2e/protractor.conf.js",
  },
  {
    chapter: "protractor",
    domainPath: "protractor-testing-without-page-and-class-bindings",
    markdownPath:
      "assets/testing/end-to-end/protractor/testing-without-page-and-class-bindings.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/protractor/without-page-and-class-bindings.md",
    section: "Without page objects",
    aPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-yjj1zq?file=e2e/src/app.po.ts",
    bPath:
      "https://stackblitz.com/edit/angular-webcontainer-template-6wu4br?embed=1&file=e2e/src/app.e2e-spec.ts",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-installing-and-opening",
    markdownPath:
      "assets/testing/end-to-end/cypress/installing-and-opening/readme.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/installing-and-opening/readme.md",
    section: "Installing and opening",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-first-test",
    markdownPath: "assets/testing/end-to-end/cypress/cypress-first-test.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/cypress-first-test.md",
    section: "Writing our first cypress test",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-testing-text-input",
    markdownPath: "assets/testing/end-to-end/cypress/testing-text-input.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/testing-text-input.md",
    section: "Testing text input",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-selecting-elements",
    markdownPath: "assets/testing/end-to-end/cypress/selecting-elements.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/selecting-elements.md",
    section: "Selecting elements",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-aliasing-elements",
    markdownPath: "assets/testing/end-to-end/cypress/aliasing-elements.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/aliasing-elements.md",
    section: "Aliasing elements",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-working-with-command-results",
    markdownPath:
      "assets/testing/end-to-end/cypress/working-with-command-results.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/working-with-command-results.md",
    section: "Working with command results",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-beforeEach-hook",
    markdownPath: "assets/testing/end-to-end/cypress/beforeEach-hook.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/beforeEach-hook.md",
    section: "BeforeEach hook",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-setting-a-base-url",
    markdownPath: "assets/testing/end-to-end/cypress/setting-a-base-url.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/setting-a-base-url.md",
    section: "Setting a base URL",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-interacting-with-elements",
    markdownPath:
      "assets/testing/end-to-end/cypress/interacting-with-elements.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/interacting-with-elements.md",
    section: "Interacting with elements",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-triggering-other-actions",
    markdownPath:
      "assets/testing/end-to-end/cypress/triggering-other-actions.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/triggering-other-actions.md",
    section: "Triggering other actions",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-common-assertions",
    markdownPath: "assets/testing/end-to-end/cypress/common-assertions.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/common-assertions.md",
    section: "Common assertions",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-automatic-retrying",
    markdownPath: "assets/testing/end-to-end/cypress/automatic-retrying.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/automatic-retrying.md",
    section: "Automatic retrying",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-debugging-in-cypress",
    markdownPath: "assets/testing/end-to-end/cypress/debugging-in-cypress.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/debugging-in-cypress.md",
    section: "Debugging in cypress",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-environment-variables",
    markdownPath: "assets/testing/end-to-end/cypress/environment-variables.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/environment-variables.md",
    section: "Environment variables",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-test-doubles",
    markdownPath: "assets/testing/end-to-end/cypress/test-doubles.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/test-doubles.md",
    section: "Test doubles",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-wrap-command",
    markdownPath: "assets/testing/end-to-end/cypress/wrap-command.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/wrap-command.md",
    section: "Wrap command",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-and-command",
    markdownPath: "assets/testing/end-to-end/cypress/and-command.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/and-command.md",
    section: "And command",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-filter-and-not-command",
    markdownPath: "assets/testing/end-to-end/cypress/filter-and-not-command.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/filter-and-not-command.md",
    section: "Filter and not command",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-typing-special-characters",
    markdownPath:
      "assets/testing/end-to-end/cypress/typing-special-characters.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/typing-special-characters.md",
    section: "Typing special characters",
  },
  {
    chapter: "cypress",
    domainPath: "cypress-activating-code-completion",
    markdownPath:
      "assets/testing/end-to-end/cypress/activating-code-completion.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/testing/end-to-end/cypress/activating-code-completion.md",
    section: "Activating code completion",
  },
];
