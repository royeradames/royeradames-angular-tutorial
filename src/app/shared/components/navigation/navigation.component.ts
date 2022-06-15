import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: [
    "./navigation.component.scss",
    "./footer.component.scss",
    "./header.component.scss",
  ],
})
export class NavigationComponent implements OnInit {
  @Input() menu = "";
  @Input() footer = false;

  constructor() {}

  ngOnInit(): void {}
}
