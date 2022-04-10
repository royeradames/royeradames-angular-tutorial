import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AngularDocComponent } from "./angular-doc/angular-doc.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, AngularDocComponent],
  imports: [
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
