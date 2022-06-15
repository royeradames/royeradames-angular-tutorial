import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-svg-close",
  templateUrl: "./svg-close.component.html",
  styleUrls: ["./svg-close.component.scss"],
})
export class SvgCloseComponent implements OnInit {
  @Input() isMenuOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
