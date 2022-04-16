import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { NotesInterface, notesNav, notes } from "./notes-data";
interface MetaInterface extends Omit<NotesInterface, "aPath" | "bPath"> {
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
export class tutorialTemplateComponent {
  meta: MetaInterface;
  notesNav = notesNav();
  id: string;
  isHidingNav = true;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.meta = this.getMeta(notes);
    this.id = this.generateTitleId();
    this.router.events.subscribe((e) => {
      this.meta = this.getMeta(notes);
    });

    // when redirected to home remove redirected path
    if (this.meta.domainPath === "") this.router.navigate(["/"]);
  }

  showReset(): void {
    if (this.meta.bPath === undefined) return;
    const showSolution = this.meta.currentText === "Show me" ? true : false;
    if (showSolution) {
      this.meta.currentText = this.meta.resetText;
      this.meta.playgroundPath = this.meta.bPath;
    } else {
      this.meta.currentText = this.meta.showText;
      this.meta.playgroundPath = this.meta.aPath;
    }
  }

  private generateTitleId(): string {
    return (
      "#" +
      this.notesNav
        .find(
          (note) => note.name === `${this.meta.chapter} / ${this.meta.section}`
        )
        ?.link?.replace("/", "")
    );
  }
  private trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private loadNote(notes: NotesInterface[]): NotesInterface {
    const currentDomainPath = this.route.snapshot.params["title"];
    console.log(currentDomainPath);
    const note = notes.find((note) => note.domainPath === currentDomainPath);
    if (note === undefined) return notes[0];
    return note;
  }

  private getMeta(notes: NotesInterface[]) {
    const currentTutorial = this.loadNote(notes);
    return {
      ...currentTutorial,
      aPath: this.trustUrl(currentTutorial.aPath),
      bPath:
        currentTutorial.bPath === undefined
          ? undefined
          : this.trustUrl(currentTutorial.bPath),
      playgroundPath: this.trustUrl(currentTutorial.aPath),
      showText: "Show me",
      resetText: "Reset",
      currentText: "Show me",
    };
  }
}
