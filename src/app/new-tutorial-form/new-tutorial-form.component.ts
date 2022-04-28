import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NewTutorialService } from "../tutorial.service";
@Component({
  selector: "app-new-tutorial-form",
  templateUrl: "./new-tutorial-form.component.html",
  styleUrls: ["./new-tutorial-form.component.scss"],
})
export class NewTutorialFormComponent {
  form: FormGroup;
  innitContent = "";
  content = `# this is a test\n\n## Pratice\n`;
  constructor(private newTutorialService: NewTutorialService) {
    this.form = new FormGroup({
      chapter: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      aPath: new FormControl(null, [Validators.required]),
      bPath: new FormControl(null, [Validators.required]),
      markdown: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.newTutorialService.addTutorial(this.form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.form.reset();
  }

  testProfile() {
    this.form.patchValue({
      chapter: "1",
      title: "test",
      aPath: "test",
      bPath: "test",
      markdown: `# Profile this is a test\n\n## Pratice\n`,
    });
  }

  reset() {
    if (confirm("Are you sure you want to reset?")) this.form.reset();
  }
}
