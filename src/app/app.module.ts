import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";
import { AppRoutesModule } from "./app-routes.module";
import { NewTutorialFormComponent } from "./new-tutorial-form/new-tutorial-form.component";
import { TableOfContentComponent } from "./table-of-contents/table-of-content.component";

@NgModule({
  declarations: [
    AppComponent,
    TutorialTemplateComponent,
    NewTutorialFormComponent,
    TableOfContentComponent,
  ],
  imports: [
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
