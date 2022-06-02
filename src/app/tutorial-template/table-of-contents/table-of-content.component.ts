import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NotesService, TableOfContentInterface } from "src/app/notes.service";

@Component({
  selector: "app-table-of-content",
  templateUrl: "./table-of-content.component.html",
  styleUrls: ["./table-of-content.component.scss"],
})
export class TableOfContentComponent {
  section = "";
  notesNav: TableOfContentInterface[] = this.notesService.notesNav();

  isHidingNav = true;

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService
  ) {
    this.route.params.subscribe((params) => {
      this.notesNav.forEach((note, index) => {
        const currentDomain = `/${params["title"] ? params["title"] : ""}`;
        const isInCurrentDomain = note.domainPath === currentDomain;
        if (isInCurrentDomain) {
          const maxIndex = this.notesNav.length - 1;

          this.section = note.section;

          this.notesService.meta.previousTutorialLink =
            index - 1 >= 0 ? `${this.notesNav[index - 1].domainPath}` : "";

          this.notesService.meta.nextTutorialLink =
            index + 1 <= maxIndex
              ? `${this.notesNav[index + 1].domainPath}`
              : "";
        }
      });
    });
  }
}
