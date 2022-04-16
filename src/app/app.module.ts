import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { tutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";

@NgModule({
  declarations: [AppComponent, tutorialTemplateComponent],
  imports: [
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: tutorialTemplateComponent },
      {
        path: ":title",
        component: tutorialTemplateComponent,
      },
      { path: "**", redirectTo: "" },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
