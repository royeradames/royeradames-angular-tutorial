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
      "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-4rloit?embed=1&file=src/app/app.module.ts&hideExplorer=1",
    playgroundPath:
      "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts&hideExplorer=1",
    markdownPath: "assets/setting-up-routes.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/setting-up-routes.md&hideExplorer=1",
  },
  {
    id: 2,
    title: "Routing / Links",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-ou51xf?embed=1&file=src/app/app.component.html&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-y71jmy?embed=1&file=src/app/app.component.html&hideExplorer=1",
    playgroundPath:
      "https://stackblitz.com/edit/angular-ivy-y71jmy?embed=1&file=src/app/app.component.html&hideExplorer=1",
    markdownPath: "assets/router-link.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/router-link.md",
  },
  {
    id: 3,
    title: "Routing / Relative vs absolute path",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-mdyp2r?file=src/app/servers/servers.component.html&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-zrnbkv?embed=1&file=src/app/servers/servers.component.html",
    playgroundPath:
      "https://stackblitz.com/edit/angular-ivy-mdyp2r?file=src/app/servers/servers.component.html&hideExplorer=1",
    markdownPath: "assets/relative-vs-absolute-path.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/relative-vs-absolute-path.md",
  },
  {
    id: 4,
    title: "Routing / Styling active router links",
    aPath:
      "https://stackblitz.com/edit/angular-ivy-8mcz3h?embed=1&file=src/app/app.component.html&hideExplorer=1",
    bPath:
      "https://stackblitz.com/edit/angular-ivy-q3qvxv?embed=1&file=src/app/app.component.html&hideExplorer=1",
    playgroundPath:
      "https://stackblitz.com/edit/angular-ivy-8mcz3h?embed=1&file=src/app/app.component.html&hideExplorer=1",
    markdownPath: "assets/styling-active-router-links.md",
    editPath:
      "https://github.com/royeradames/royeradames-angular-tutorial/blob/main/src/assets/styling-active-router-links.md",
  },
];
@Injectable({
  providedIn: "root",
})
export class ChapterService {
  meta: Meta;

  constructor(private sanitizer: DomSanitizer) {
    const currentTutorial = notes[3];
    this.meta = {
      ...currentTutorial,
      aPath: this.trustUrl(currentTutorial.aPath),
      bPath: this.trustUrl(currentTutorial.bPath),
      playgroundPath: this.trustUrl(currentTutorial.playgroundPath),
      showText: "Show me",
      resetText: "Reset",
      currentText: "Show me",
    };
  }

  private trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
