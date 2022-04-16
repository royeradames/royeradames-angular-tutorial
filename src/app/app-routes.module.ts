import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { tutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: tutorialTemplateComponent },
      {
        path: ":title",
        component: tutorialTemplateComponent,
      },
      { path: "**", redirectTo: "" },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutesModule {}
