import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-svg-linkedin-icon",
  templateUrl: "./svg-linkedin-icon.component.html",
  styleUrls: ["./svg-linkedin-icon.component.scss"],
})
export class SvgLinkedinIconComponent implements OnInit {
  @Input() page = "header";
  constructor() {}

  ngOnInit(): void {}
}
