import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

interface Notes {
  id: number;
  title: string;
  aPath: string;
  bPath: string;
  playgroundPath: string;
  markdownPath: string;
  editPath: string;
}
interface Meta extends Omit<Notes, "aPath" | "bPath" | "playgroundPath"> {
  showText: string;
  resetText: string;
  currentText: string;
  aPath: SafeResourceUrl;
  bPath: SafeResourceUrl;
  playgroundPath: SafeResourceUrl;
}

const notes: Notes[] = [
  {
    id: 1,
    title: "Routing / Setting up and loading routes",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-4rloit?embed=1&file=src/app/app.module.ts",
    playgroundPath:
      "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts",
    markdownPath: "assets/setting-up-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/setting-up-routes.md",
  },
  {
    id: 2,
    title: "Routing / Links",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-ou51xf?embed=1&file=src/app/app.component.html",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-y71jmy?embed=1&file=src/app/app.component.html",
    playgroundPath:
      "https://stackblitz.com/edit/angular-ivy-y71jmy?embed=1&file=src/app/app.component.html",
    markdownPath: "assets/router-link.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/router-link.md",
  },
];
@Injectable({
  providedIn: "root",
})
export class ChapterService {
  meta: Meta;

  constructor(private sanitizer: DomSanitizer) {
    this.meta = {
      ...notes[1],
      showText: "Show me",
      resetText: "Reset",
      currentText: "Show me",
      aPath: this.trustUrl(notes[1].aPath),
      bPath: this.sanitizer.bypassSecurityTrustResourceUrl(notes[1].bPath),
      playgroundPath: this.sanitizer.bypassSecurityTrustResourceUrl(
        notes[1].playgroundPath
      ),
    };
  }

  private trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
