import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  onError(e) {
    console.log(e);
  }
  onLoad(e) {
    console.log(e);
  }
}
