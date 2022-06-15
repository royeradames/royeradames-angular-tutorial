import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-svg-hamburger",
  templateUrl: "./svg-hamburger.component.html",
  styleUrls: ["./svg-hamburger.component.scss"],
})
export class SvgHamburgerComponent implements OnInit {
  @Input() isMenuOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
