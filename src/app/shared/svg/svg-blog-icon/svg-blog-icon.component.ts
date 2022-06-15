import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-svg-blog-icon",
  templateUrl: "./svg-blog-icon.component.html",
  styleUrls: ["./svg-blog-icon.component.scss"],
})
export class SvgBlogIconComponent implements OnInit {
  @Input() page = "header";
  constructor() {}

  ngOnInit(): void {}
}
