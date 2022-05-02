import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TutorialInterface, TutorialService, url } from "../tutorial.service";
@Component({
  selector: "app-new-tutorial-form",
  templateUrl: "./new-tutorial-form.component.html",
  styleUrls: ["./new-tutorial-form.component.scss"],
})
export class NewTutorialFormComponent {
  form: FormGroup;
  innitContent = "";
  content = `# this is a test\n\n## Pratice\n`;
  error = "";
  markdownText = "";

  constructor(
    private tutorialService: TutorialService,
    private http: HttpClient
  ) {
    this.form = new FormGroup({
      chapter: new FormControl(null, [Validators.required]),
      section: new FormControl(null, [Validators.required]),
      aPath: new FormControl(null, [Validators.required]),
      bPath: new FormControl(null, [Validators.required]),
      markdown: new FormControl(null, [Validators.required]),
    });

    this.http.get<TutorialInterface>(`${url}/tutorials/8`).subscribe({
      next: (data) => {
        this.markdownText = data.markdown;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("complete TutorialService");
      },
    });
  }

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

  testProfile() {
    this.form.patchValue({
      chapter: "1",
      section: "test",
      aPath: "test",
      bPath: "test",
      markdown: `# Profile this is a test\n\n## Pratice\n`,
    });
  }

  reset() {
    if (confirm("Are you sure you want to reset?")) this.form.reset();
  }
}
