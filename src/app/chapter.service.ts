import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

interface Meta {
  title: string;
  aPath: SafeResourceUrl;
  bPath: SafeResourceUrl;
  playgroundPath: SafeResourceUrl;
  showResetBtnText: string;
}

@Injectable({
  providedIn: "root",
})
export class ChapterService {
  constructor(private sanitizer: DomSanitizer) {}
  meta: Meta = {
    title: "Routing / Setting up and loading routes",
    aPath: this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts"
    ),
    bPath: this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://stackblitz.com/edit/angular-ivy-4rloit?embed=1&file=src/app/app.module.ts"
    ),
    showResetBtnText: "Show me",
    playgroundPath: this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://stackblitz.com/edit/angular-ivy-2zan4p?embed=1&file=src/app/app.module.ts"
    ),
  };
}
