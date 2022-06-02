import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
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
