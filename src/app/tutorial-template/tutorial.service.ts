import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// import { url } from "../../serverInformation";
import { NewTutorialInterface } from "../new-tutorial.interface";
import { TableOfContentInterface } from "./notes.service";
export const url = "http://localhost:3001";

export type Technology =
  | "angular"
  | "react"
  | "nestjs"
  | "typescript"
  | "nodejs"
  | "elasticsearch"
  | "nextjs";

export interface CreateTutorialInterface {
  chapter: string;
  section: string;
  domainPath: string;
  markdown: string;
  aPath: string;
  bPath: string;
  technology: Technology;
}
export interface TutorialInterface extends CreateTutorialInterface {
  id: number;
}
@Injectable({
  providedIn: "root",
})
export class TutorialService {
  currentTutorial: TutorialInterface["markdown"] = "";
  meta = {
    currentTutorial: "",
  };

  constructor(private http: HttpClient) {}

  addTutorial(newTutorial: NewTutorialInterface) {
    const createTutorial: CreateTutorialInterface = {
      ...newTutorial,
      technology: "angular",
      domainPath: `${newTutorial.chapter
        .replace(/\s+/g, "-")
        .toLowerCase()}-${newTutorial.section
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
    };
    return this.http.post(`${url}/tutorials`, createTutorial);
  }

  updateTutorial(tutorialId: number, newTutorial: NewTutorialInterface) {
    return this.http.put(`${url}/tutorials/${tutorialId}`, newTutorial);
  }

  getTableOfContent() {
    return this.http.get<TableOfContentInterface[]>(
      `${url}/tutorials/angular/table-of-contents`
    );
  }
}
