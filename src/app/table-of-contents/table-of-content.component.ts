import { Component, Input } from "@angular/core";
import { MetaInterface } from "../tutorial-template/tutorial-template.component";

interface NotesNav {
  link: string;
  name: string;
}

@Component({
  selector: "app-table-of-content",
  templateUrl: "./table-of-content.component.html",
  styleUrls: ["./table-of-content.component.scss"],
})
export class TableOfContentComponent {
  @Input() title = "";
  @Input() notesNav: NotesNav[] = [];
  isHidingNav = true;
}
