import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular-doc",
  templateUrl: "./angular-doc.component.html",
  styleUrls: ["./angular-doc.component.scss"],
})
export class AngularDocComponent implements OnInit {
  title = "my-app";
  constructor() {}

  ngOnInit(): void {}
}
