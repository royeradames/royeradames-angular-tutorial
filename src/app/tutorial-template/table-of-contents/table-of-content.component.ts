import { Component, Input } from "@angular/core";
import { NotesNav } from "src/app/notes-data";
import { MetaInterface } from "../tutorial-template.component";

@Component({
  selector: "app-table-of-content",
  templateUrl: "./table-of-content.component.html",
  styleUrls: ["./table-of-content.component.scss"],
})
export class TableOfContentComponent {
  @Input() section = "";
  @Input() notesNav: NotesNav[] = [];
  isHidingNav = true;
}
