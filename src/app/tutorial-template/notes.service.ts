import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Params } from "@angular/router";
import { lastValueFrom } from "rxjs";
import {
  TutorialInterface,
  TutorialsOptgroup,
  tutorialsOptgroup,
} from "./data/tutorials";
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
  displayButton: boolean;
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
    displayButton: true,
    currentText: "Show me",
    aPath: this.trustUrl(""),
    bPath: this.trustUrl(""),
    currentPlaygroundPath: this.trustUrl(""),
    playgroundExist: true,
    previousDomainPath: "",
    currentDomainPath: "",
    nextDomainPath: "",
  };
  constructor(private sanitizer: DomSanitizer) {}
  private trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  setCurrentTutorial({
    meta: currentTutorial,
    tutorials: chapterList,
    params,
  }: TrackDomainsGroupInterface): void {
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
          currentTutorial.playgroundExist =
            currentTutorial.aPath.toString().length > 74;
          currentTutorial.displayButton =
            currentTutorial.bPath.toString().length > 74;
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
    else if (otherChapter) {
      const otherChapterSectionIndex =
        adjacent === "previous" ? otherChapter.options.length - 1 : 0;
      const otherChapterSection =
        otherChapter.options[otherChapterSectionIndex].domainPath;
      return otherChapterSection;
    }
    return "";
  }
}
