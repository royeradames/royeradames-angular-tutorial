import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NewTutorialFormComponent } from "./new-tutorial-form/new-tutorial-form.component";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: TutorialTemplateComponent },
      {
        path: ":title",
        component: TutorialTemplateComponent,
      },
      {
        path: "new-angular-tutorial",
        component: NewTutorialFormComponent,
      },
      { path: "**", redirectTo: "" },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutesModule {}
