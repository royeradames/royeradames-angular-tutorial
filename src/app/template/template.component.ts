import { Component, OnInit } from "@angular/core";
import { ChapterService } from "./chapter.service";
@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"],
})
export class TemplateComponent implements OnInit {
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

  ngOnInit(): void {}
}
