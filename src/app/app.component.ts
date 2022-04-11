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
    const showSolution = this.meta.currentText === "Show me" ? true : false;
    if (showSolution) {
      this.meta.currentText = this.meta.resetText;
      this.meta.playgroundPath = this.meta.bPath;
    } else {
      this.meta.currentText = this.chapterService.meta.showText;
      this.meta.playgroundPath = this.meta.aPath;
    }
  }
}
