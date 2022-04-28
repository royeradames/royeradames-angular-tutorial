import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// import { url } from "../../serverInformation";
import { NewTutorialInterface } from "./new-tutorial.interface";
const url = "";
@Injectable({
  providedIn: "root",
})
export class NewTutorialService {
  constructor(private http: HttpClient) {}

  addTutorial(newTutorial: NewTutorialInterface) {
    return this.http.post(`${url}/tutorials`, newTutorial);
  }

  updateTutorial(tutorialId: number, newTutorial: NewTutorialInterface) {
    return this.http.put(`${url}/tutorials/${tutorialId}`, newTutorial);
  }
}
