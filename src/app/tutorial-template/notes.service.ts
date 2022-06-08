import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Params } from "@angular/router";
import { lastValueFrom } from "rxjs";
import {
  TutorialInterface,
  tutorials,
  TutorialsOptgroup,
  tutorialsOptgroup,
} from "./data/tutorial";
import { TutorialService } from "./tutorial.service";

export interface TrackDomainsGroupInterface {
  meta: CurrentTutorialInterface;
  params: Params;
  tutorials: TutorialsOptgroup[];
}
export interface TableOfContentInterface {
  id: number;
  domainPath: string;
  section: string;
  chapter?: string;
}
export interface CurrentTutorialInterface {
  previousDomainPath: string;
  currentDomainPath: string;
  nextDomainPath: string;
  domainPath: string;
  chapter: string;
  section: string;
  aPath: SafeResourceUrl;
  bPath: SafeResourceUrl;
  markdownPath: string;
  editPath: string;
  currentPlaygroundPath: SafeResourceUrl;
  showText: string;
  resetText: string;
  currentText: string;
  playgroundExist: boolean;
}
export interface SetAdjacentDomainPathInterface {
  otherChapter: TutorialsOptgroup;
  otherSection: TutorialInterface;
  adjacent: "previous" | "next";
}
@Injectable({
  providedIn: "root",
})
export class NotesService {
  notesOptgroups: TutorialsOptgroup[] = tutorialsOptgroup;
  currentTutorial: CurrentTutorialInterface = {
    domainPath: "",
    chapter: "",
    section: "",
    markdownPath: "",
    editPath: "",
    showText: "Show me",
    resetText: "Reset",
    currentText: "Show me",
    aPath: this.trustUrl(""),
    bPath: this.trustUrl(""),
    currentPlaygroundPath: this.trustUrl(""),
    playgroundExist: true,
    previousDomainPath: "",
    currentDomainPath: "",
    nextDomainPath: "",
  };
  constructor(
    private http: HttpClient,
    private tutorialService: TutorialService,
    private sanitizer: DomSanitizer
  ) {}
  private trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  exportNotes() {
    this.notes.forEach(async (note, index) => {
      const post = {
        chapter: note.chapter,
        section: note.section,
        aPath: note.aPath || "",
        bPath: note.bPath || "",
        markdown: await lastValueFrom(
          this.http.get(note.markdownPath, {
            responseType: "text",
          })
        ),
      };

      await lastValueFrom(this.tutorialService.addTutorial(post));
    });
  }
  notesNav(): TableOfContentInterface[] {
    let previousChapter = "";
    return this.notes.map((note, index) => {
      const isNewChapter = note.chapter != previousChapter;

      const nav: TableOfContentInterface = {
        id: index,
        domainPath: "/" + note.domainPath,
        section: note.section,
        chapter: isNewChapter ? note.chapter : undefined,
      };

      if (isNewChapter) previousChapter = note.chapter;
      return nav;
    });
  }

  notes: TutorialInterface[] = tutorials;

  setCurrentTutorial({
    meta: currentTutorial,
    tutorials: chapterList,
    params,
  }: TrackDomainsGroupInterface): void {
    const maxChapterListIndex = chapterList.length - 1;
    chapterList.forEach((chapter, chapterIndex) => {
      const sectionList = chapter.options;
      sectionList.forEach((section, sectionIndex) => {
        const currentDomain: string = params["title"] || "";
        const isInCurrentDomain = section.domainPath === currentDomain;
        if (isInCurrentDomain) {
          currentTutorial.domainPath = section.domainPath;
          currentTutorial.chapter = section.chapter;
          currentTutorial.section = section.section;
          currentTutorial.markdownPath = section.markdownPath;
          currentTutorial.editPath = section.editPath;
          currentTutorial.editPath = section.editPath;
          currentTutorial.aPath = this.trustUrl(section.aPath);
          currentTutorial.bPath = this.trustUrl(section.bPath);
          currentTutorial.currentPlaygroundPath = currentTutorial.aPath;
          currentTutorial.currentPlaygroundPath =
            currentTutorial.aPath.toString().length > 74;
          currentTutorial.previousDomainPath = this.setAdjacentDomainPath({
            otherChapter: chapterList[chapterIndex - 1],
            otherSection: sectionList[sectionIndex - 1],
            adjacent: "previous",
          });
          currentTutorial.currentDomainPath = section.domainPath;
          currentTutorial.nextDomainPath = this.setAdjacentDomainPath({
            otherChapter: chapterList[chapterIndex + 1],
            otherSection: sectionList[sectionIndex + 1],
            adjacent: "next",
          });
        }
      });
    });
  }

  setAdjacentDomainPath({
    otherChapter,
    otherSection,
    adjacent,
  }: SetAdjacentDomainPathInterface) {
    if (otherSection) return otherSection.domainPath;
    else if (!!otherChapter) {
      const otherChapterSectionIndex =
        adjacent === "previous" ? otherChapter.options.length - 1 : 0;
      const otherChapterSection =
        otherChapter.options[otherChapterSectionIndex].domainPath;
      return otherChapterSection;
    }
    return "";
  }
}
