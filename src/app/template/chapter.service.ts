import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { notes, Notes } from "./notes-data";

interface Meta extends Omit<Notes, "aPath" | "bPath"> {
  showText: string;
  resetText: string;
  currentText: string;
  aPath: SafeResourceUrl;
  bPath: SafeResourceUrl;
  playgroundPath: SafeResourceUrl;
}
@Injectable({
  providedIn: "root",
})
export class ChapterService {
  meta: Meta;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    router.events.subscribe((e) => {
      this.meta = this.setMeta(notes);
    });
    this.meta = this.setMeta(notes);
  }

  private trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private loadNote(notes: Notes[]) {
    const currentDomainPath = this.router.url.replace("/", "");
    const note = notes.find((note) => note.domainPath === currentDomainPath);
    if (note === undefined) return notes[0];
    return note;
  }

  private setMeta(notes: Notes[]) {
    const currentTutorial = this.loadNote(notes);
    return {
      ...currentTutorial,
      aPath: this.trustUrl(currentTutorial.aPath),
      bPath: this.trustUrl(currentTutorial.bPath),
      playgroundPath: this.trustUrl(currentTutorial.aPath),
      showText: "Show me",
      resetText: "Reset",
      currentText: "Show me",
    };
  }
}
