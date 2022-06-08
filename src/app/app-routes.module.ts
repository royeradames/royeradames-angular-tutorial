import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

const routes: Routes = [
  {
    path: ":technology/:title",
    component: TutorialTemplateComponent,
  },

  { path: "**", redirectTo: "angular/welcome-to-angular" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
