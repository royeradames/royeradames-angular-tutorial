import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { TutorialInterface, TutorialsOptgroup } from "src/app/data/tutorial";
import { NotesService, TableOfContentInterface } from "src/app/notes.service";

interface trackDomainsGroupInterface {
  meta: {
    previousTutorialLink: string;
    currentTutorialLink: string;
    nextTutorialLink: string;
  };
  params: Params;
  note: TutorialInterface;
  index: number;
  options: TutorialInterface[];
}
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

  meta = this.notesService.meta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notesService: NotesService,
    private router: Router
  ) {
    this.checkCurrentDomain(
      this.meta,
      this.activatedRoute.params,
      this.notesNavOptgroup,
      this.trackDomainsGroup
    );
  }

  navigateTo(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.router.navigate([filterValue]);
    }
  }

  private checkCurrentDomain(
    meta: typeof this.meta,
    params: Observable<Params>,
    nav: TutorialsOptgroup[],
    trackDomain: ({
      options,
      params,
      note,
      index,
    }: trackDomainsGroupInterface) => void
  ): void {
    params.subscribe((params) => {
      nav.forEach((group) =>
        group.options.forEach((tutorial, index) =>
          trackDomain({
            meta,
            options: group.options,
            params,
            note: tutorial,
            index,
          })
        )
      );
    });
  }

  private trackDomainsGroup({
    meta,
    options,
    params,
    note,
    index,
  }: trackDomainsGroupInterface): void {
    const currentDomain = params["title"] || "";
    const isInCurrentDomain = note.domainPath === currentDomain;
    if (isInCurrentDomain) {
      const maxIndex = options.length - 1;
      meta.previousTutorialLink =
        index - 1 >= 0 ? `${options[index - 1].domainPath}` : "";

      meta.currentTutorialLink =
        index - 1 >= 0 ? `${options[index].domainPath}` : "";

      meta.nextTutorialLink =
        index + 1 <= maxIndex ? `${options[index + 1].domainPath}` : "";
    }
  }
}
