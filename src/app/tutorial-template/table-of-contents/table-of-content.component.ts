import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TableOfContentInterface } from "src/app/notes.service";
import { TutorialService } from "src/app/tutorial.service";

@Component({
  selector: "app-table-of-content",
  templateUrl: "./table-of-content.component.html",
  styleUrls: ["./table-of-content.component.scss"],
})
export class TableOfContentComponent {
  section = "";
  notesNav: TableOfContentInterface[] = [];

  isHidingNav = true;

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute
  ) {
    this.tutorialService.getTableOfContent().subscribe({
      next: (data) => {
        this.notesNav = data;
      },
    });

    this.route.params.subscribe((params) => {
      this.section =
        this.notesNav.find((note) => {
          const currentDomain = `/${params["title"] ? params["title"] : ""}`;
          return note.domainPath === currentDomain;
        })?.section || "Params title doesn't equal note link";
    });
  }
}
