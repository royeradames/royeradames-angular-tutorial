import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss", "./website.component.scss"],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  constructor() {}

  ngOnInit(): void {}

  mobileMenuLogic(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
