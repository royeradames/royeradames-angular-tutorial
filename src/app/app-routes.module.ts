import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

const routes: Routes = [
  { path: "", component: TutorialTemplateComponent },
  {
    path: ":title",
    component: TutorialTemplateComponent,
  },

  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
