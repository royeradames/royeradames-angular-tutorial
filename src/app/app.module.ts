import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { tutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";
import { AppRoutesModule } from "./app-routes.module";

@NgModule({
  declarations: [AppComponent, tutorialTemplateComponent],
  imports: [
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
