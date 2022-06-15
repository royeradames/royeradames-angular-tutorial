import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-svg-github",
  templateUrl: "./svg-github.component.html",
  styleUrls: ["./svg-github.component.scss"],
})
export class SvgGithubComponent implements OnInit {
  @Input() page = "header";
  constructor() {}

  ngOnInit(): void {}
}
