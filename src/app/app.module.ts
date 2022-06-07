import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TutorialTemplateComponent } from "./tutorial-template/tutorial-template.component";
import { AppRoutesModule } from "./app-routes.module";
import { TableOfContentComponent } from "./tutorial-template/table-of-contents/table-of-content.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LMarkdownEditorModule } from "ngx-markdown-editor";
import { NavigationButtonsComponent } from "./tutorial-template/navigation-buttons/navigation-buttons.component";
import { ArrowComponent } from './svg/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialTemplateComponent,
    TableOfContentComponent,
    NavigationButtonsComponent,
    ArrowComponent,
  ],
  imports: [
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    ReactiveFormsModule,
    LMarkdownEditorModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
