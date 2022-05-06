import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { TutorialInterface, tutorials } from "./data/tutorial";
import { TutorialService } from "./tutorial.service";

export interface TableOfContentInterface {
  id: number;
  domainPath: string;
  section: string;
  chapter?: string;
}

@Injectable({
  providedIn: "root",
})
export class NotesService {
  constructor(
    private http: HttpClient,
    private tutorialService: TutorialService
  ) {}
  exportNotes() {
    console.log(this.notes);
    this.notes.forEach(async (note, index) => {
      const post = {
        chapter: note.chapter,
        section: note.section,
        aPath: note.aPath,
        bPath: note.bPath || "",
        markdown: await lastValueFrom(
          this.http.get(note.markdownPath, {
            responseType: "text",
          })
        ),
      };

      await lastValueFrom(this.tutorialService.addTutorial(post));

      console.log(`${index}`, post);
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
}
