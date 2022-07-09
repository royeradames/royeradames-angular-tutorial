import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { TutorialInterface } from "./data/angular-tutorials";
import { NotesService } from "./notes.service";

export interface MetaInterface
  extends Omit<TutorialInterface, "aPath" | "bPath"> {
  showText: string;
  resetText: string;
  currentText: string;
  aPath: SafeResourceUrl;
  bPath?: SafeResourceUrl;
  playgroundPath: SafeResourceUrl;
}
@Component({
  selector: "app-tutorial-template",
  templateUrl: "./tutorial-template.component.html",
  styleUrls: ["./tutorial-template.component.scss"],
})
export class TutorialTemplateComponent {
  notesNavOptgroup = this.notesService.notesOptgroups;

  currentTutorial = this.notesService.currentTutorial;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notesService: NotesService
  ) {
    this.activatedRoute.params.subscribe((params) =>
      this.notesService.setCurrentTutorial({
        meta: this.currentTutorial,
        params,
        tutorials: this.notesNavOptgroup,
      })
    );

    // when redirected to home remove redirected path
    if (this.currentTutorial.domainPath === "") this.router.navigate(["/"]);
  }

  showReset(): void {
    if (this.currentTutorial.bPath === undefined) return;
    const showSolution =
      this.currentTutorial.currentText === "Show me" ? true : false;
    if (showSolution) {
      this.currentTutorial.currentText = this.currentTutorial.resetText;
      this.currentTutorial.currentPlaygroundPath = this.currentTutorial.bPath;
      return;
    }
    this.currentTutorial.currentText = this.currentTutorial.showText;
    this.currentTutorial.currentPlaygroundPath = this.currentTutorial.aPath;
  }
}
