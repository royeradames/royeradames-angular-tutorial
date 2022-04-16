import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NewTutorialFormComponent } from "./new-tutorial-form/new-tutorial-form.component";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "new",
        component: NewTutorialFormComponent,
      },
      { path: "", component: TutorialTemplateComponent },
      {
        path: ":title",
        component: TutorialTemplateComponent,
      },

      { path: "**", redirectTo: "" },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutesModule {}
