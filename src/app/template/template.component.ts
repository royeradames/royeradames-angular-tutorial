import { Component, OnInit } from "@angular/core";
import { ChapterService } from "./chapter.service";
import { notesNav } from "./notes-data";
@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"],
})
export class TemplateComponent {
  meta = this.chapterService.meta;
  notesNav = notesNav();
  id = this.generateTitleId();

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

  private generateTitleId() {
    return (
      "#" +
      this.notesNav
        .find(
          (note) => note.name === `${this.meta.chapter} / ${this.meta.section}`
        )
        ?.link?.replace("/", "")
    );
  }
}
