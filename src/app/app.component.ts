import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {}
  onError(e) {
    console.log(e);
  }
  onLoad(e) {
    console.log(e);
  }
  aPath =
    "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts";
  bPath =
    "https://stackblitz.com/edit/angular-ivy-4rloit?embed=1&file=src/app/app.module.ts";
  playgroundPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.aPath);

  showResetBtnText = "Show me";
  showReset(): void {
    const showSolution = this.showResetBtnText === "Show me" ? true : false;

    if (showSolution) {
      ("change src path");
      this.showResetBtnText = "Reset";
      this.playgroundPath = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.bPath
      );
    } else {
      this.showResetBtnText = "Show me";
      this.playgroundPath = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.aPath
      );
    }
  }
}
