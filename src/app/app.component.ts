import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ChapterService } from "./chapter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  meta = this.chapterService.meta;

  constructor(private chapterService: ChapterService) {}

  showReset(): void {
    const showSolution =
      this.meta.showResetBtnText === "Show me" ? true : false;
    console.log(showSolution);
    if (showSolution) {
      this.meta.showResetBtnText = "Reset";
      this.meta.playgroundPath = this.meta.bPath;
    } else {
      this.chapterService.meta.showResetBtnText = "Show me";
      this.meta.playgroundPath = this.meta.aPath;
    }
  }
}
