import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// import { url } from "../../serverInformation";
import { NewTutorialInterface } from "./new-tutorial.interface";
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

  constructor(private http: HttpClient) {
    this.http.get<TutorialInterface>(`${url}/tutorials/8`).subscribe({
      next: (data) => {
        console.log("TutorialService data", data);
        this.currentTutorial = data.markdown;
        this.meta.currentTutorial = data.markdown;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("complete TutorialService");
      },
    });
  }

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
    console.log(createTutorial);
    return this.http.post(`${url}/tutorials`, createTutorial);
  }

  updateTutorial(tutorialId: number, newTutorial: NewTutorialInterface) {
    return this.http.put(`${url}/tutorials/${tutorialId}`, newTutorial);
  }
}
