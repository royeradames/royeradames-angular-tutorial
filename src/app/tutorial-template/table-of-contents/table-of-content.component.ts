import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NotesNav, NotesService } from "src/app/notes.service";
import { TutorialService } from "src/app/tutorial.service";

@Component({
  selector: "app-table-of-content",
  templateUrl: "./table-of-content.component.html",
  styleUrls: ["./table-of-content.component.scss"],
})
export class TableOfContentComponent {
  section = "";
  notesNav: NotesNav[] = [];

  isHidingNav = true;

  constructor(
    private tutorialService: TutorialService,
    private notesService: NotesService,
    private route: ActivatedRoute
  ) {
    this.notesNav = this.notesService.notesNav();

    this.route.params.subscribe((params) => {
      this.section =
        this.notesNav.find((note) => note.link === `/${params["title"]}`)
          ?.name || "???";
    });
  }
}
