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
      this.section =
        this.notesNav.find((note) => {
          const currentDomain = `/${params["title"] ? params["title"] : ""}`;
          return note.domainPath === currentDomain;
        })?.section || "Params title doesn't equal note link";
    });
  }
}
