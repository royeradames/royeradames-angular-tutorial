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
import { ArrowComponent } from "./shared/svg/arrow/arrow.component";
import { ContactMeComponent } from "./portfolio/contact-me/contact-me.component";
import { HomeComponent } from "./portfolio/home/home.component";
import { DownArrowComponent } from "./shared/svg/down-arrow/down-arrow.component";
import { ButtonComponent } from "./shared/components/button/button.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SvgHamburgerComponent } from "./shared/svg/svg-hamburger/svg-hamburger.component";
import { SvgCloseComponent } from "./shared/svg/svg-close/svg-close.component";
import { NavigationComponent } from "./shared/components/navigation/navigation.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { SvgLogoComponent } from "./shared/svg/svg-logo/svg-logo.component";
import { SocialMediaComponent } from "./shared/components/social-media/social-media.component";
import { SvgGithubComponent } from "./shared/svg/svg-github/svg-github.component";
import { SvgLinkedinIconComponent } from "./shared/svg/svg-linkedin-icon/svg-linkedin-icon.component";
import { SvgBlogIconComponent } from "./shared/svg/svg-blog-icon/svg-blog-icon.component";

@NgModule({
  declarations: [
    AppComponent,
    TutorialTemplateComponent,
    TableOfContentComponent,
    NavigationButtonsComponent,
    ArrowComponent,
    ContactMeComponent,
    HomeComponent,
    DownArrowComponent,
    ButtonComponent,
    HeaderComponent,
    SvgHamburgerComponent,
    SvgCloseComponent,
    NavigationComponent,
    FooterComponent,
    SvgLogoComponent,
    SocialMediaComponent,
    SvgGithubComponent,
    SvgLinkedinIconComponent,
    SvgBlogIconComponent,
  ],
  imports: [
    MarkdownModule.forRoot({ loader: HttpClient}),
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
