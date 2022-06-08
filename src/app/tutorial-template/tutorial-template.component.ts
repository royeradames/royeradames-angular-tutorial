import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { TutorialInterface, TutorialsOptgroup } from "../data/tutorial";
import { NotesService } from "./notes.service";

export interface trackDomainsGroupInterface {
  meta: {
    previousTutorialLink: string;
    currentTutorialLink: string;
    nextTutorialLink: string;
  };
  params: Params;
  note: TutorialInterface;
  index: number;
  options: TutorialInterface[];
  tutorials: TutorialsOptgroup[];
}

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
  meta = this.getMeta(this.notesService.notes);
  playgroundExist = this.meta.aPath.toString().length > 74;

  notesNavOptgroup = this.notesService.notesOptgroups;

  notesServiceMeta = this.notesService.meta;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notesService: NotesService
  ) {
    // when redirected to home remove redirected path
    if (this.meta["domainPath"] === "") this.router.navigate(["/"]);

    this.router.events.subscribe(() => {
      this.meta = this.getMeta(this.notesService.notes);
      this.playgroundExist = this.meta.aPath.toString().length > 74;
    });

    this.trackDomainChange(
      this.notesServiceMeta,
      this.activatedRoute.params,
      this.notesNavOptgroup,
      this.setNotesServiceMeta
    );
  }

  showReset(): void {
    if (this.meta.bPath === undefined) return;
    const showSolution = this.meta.currentText === "Show me" ? true : false;
    if (showSolution) {
      this.meta.currentText = this.meta.resetText;
      this.meta.playgroundPath = this.meta.bPath;
    }
    this.meta.currentText = this.meta.showText;
    this.meta.playgroundPath = this.meta.aPath;
  }

  private trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private loadNote(notes: TutorialInterface[]): TutorialInterface {
    const currentDomainPath = this.activatedRoute.snapshot.params["title"];
    const note = notes.find((note) => note.domainPath === currentDomainPath);
    if (note === undefined) return notes[0];
    return note;
  }

  private getMeta(notes: TutorialInterface[]) {
    const currentTutorial = this.loadNote(notes);
    return {
      ...currentTutorial,
      aPath: this.trustUrl(currentTutorial.aPath || ""),
      bPath:
        currentTutorial.bPath === undefined
          ? undefined
          : this.trustUrl(currentTutorial.bPath),
      playgroundPath: this.trustUrl(currentTutorial.aPath || ""),
      showText: "Show me",
      resetText: "Reset",
      currentText: "Show me",
    };
  }

  private trackDomainChange(
    meta: typeof this.notesServiceMeta,
    params: Observable<Params>,
    tutorials: TutorialsOptgroup[],
    trackDomain: ({
      options,
      params,
      note,
      index,
    }: trackDomainsGroupInterface) => void
  ): void {
    params.subscribe((params) => {
      tutorials.forEach((group) =>
        group.options.forEach((tutorial, index) =>
          trackDomain({
            meta,
            tutorials,
            options: group.options,
            params,
            note: tutorial,
            index,
          })
        )
      );
    });
  }

  private setNotesServiceMeta({
    meta,
    tutorials,
    options,
    params,
    note,
    index,
  }: trackDomainsGroupInterface): void {
    const currentDomain = params["title"] || "";
    const isInCurrentDomain = note.domainPath === currentDomain;
    if (isInCurrentDomain) {
      const maxOptionsIndex = options.length - 1;
      const maxGroupIndex = tutorials.length - 1;

      meta.previousTutorialLink =
        index - 1 >= 0 ? `${options[index - 1].domainPath}` : "";

      meta.currentTutorialLink =
        index - 1 >= 0 ? `${options[index].domainPath}` : "";

      meta.nextTutorialLink =
        index + 1 <= maxOptionsIndex ? `${options[index + 1].domainPath}` : "";
    }
  }
}
