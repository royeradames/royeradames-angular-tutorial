import { Component, Input, OnInit } from "@angular/core";
import { NotesService } from "src/app/tutorial-template/notes.service";

@Component({
  selector: "app-navigation-buttons",
  templateUrl: "./navigation-buttons.component.html",
  styleUrls: ["./navigation-buttons.component.scss"],
})
export class NavigationButtonsComponent implements OnInit {
  meta = this.notesService.currentTutorial;
  @Input() dataCyPrevious = "";
  @Input() dataCyNext = "";
  @Input() showText: "" | "true" = "";
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}
}
