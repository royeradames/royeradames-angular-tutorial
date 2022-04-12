import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { noteRoutes } from "./template/notes-data";
import { TemplateComponent } from "./template/template.component";

@NgModule({
  declarations: [AppComponent, TemplateComponent],
  imports: [
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(noteRoutes()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
