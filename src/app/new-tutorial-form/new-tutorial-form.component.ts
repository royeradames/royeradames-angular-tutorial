import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { lastValueFrom } from "rxjs";
import { NotesService } from "../notes.service";
import { TutorialInterface, TutorialService, url } from "../tutorial.service";
@Component({
  selector: "app-new-tutorial-form",
  templateUrl: "./new-tutorial-form.component.html",
  styleUrls: ["./new-tutorial-form.component.scss"],
})
export class NewTutorialFormComponent {
  form = new FormGroup({
    chapter: new FormControl(null, [Validators.required]),
    section: new FormControl(null, [Validators.required]),
    aPath: new FormControl(null, [Validators.required]),
    bPath: new FormControl(null, [Validators.required]),
    markdown: new FormControl(null, [Validators.required]),
  });
  innitContent = "";
  error = "";
  markdownText = "";
  content = "";

  constructor(
    private tutorialService: TutorialService,
    private http: HttpClient,
    private notes: NotesService
  ) {}

  async ngOnInit() {}

  onSubmit() {
    this.tutorialService.addTutorial(this.form.value).subscribe({
      next: (data) => {
        console.log("data", data);
      },
      error: (err) => (this.error = JSON.stringify(err)),
      complete: () => {
        this.form.reset();
      },
    });
  }

  async testProfile() {
    const tutorial = await lastValueFrom(
      this.http.get<TutorialInterface>(`${url}/tutorials/1`)
    );

    this.form.patchValue({
      chapter: tutorial?.chapter,
      section: tutorial?.section,
      aPath: tutorial?.aPath,
      bPath: tutorial?.bPath,
      markdown: tutorial?.markdown,
    });
  }

  reset() {
    if (confirm("Are you sure you want to reset?")) this.form.reset();
  }

  exportTutorials() {
    this.notes.exportNotes();
  }
}
