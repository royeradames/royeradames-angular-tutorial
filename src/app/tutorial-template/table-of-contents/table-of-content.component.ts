import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  NotesService,
  TableOfContentInterface,
} from "src/app/tutorial-template/notes.service";

@Component({
  selector: "app-table-of-content",
  templateUrl: "./table-of-content.component.html",
  styleUrls: ["./table-of-content.component.scss"],
})
export class TableOfContentComponent {
  section = "";
  notesNav: TableOfContentInterface[] = this.notesService.notesNav();
  notesNavOptgroup = this.notesService.notesOptgroups;

  isHidingNav = true;

  meta = this.notesService.currentTutorial;

  constructor(private notesService: NotesService, private router: Router) {}

  navigateTo(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.router.navigate(["angular", filterValue]);
    }
  }
}
