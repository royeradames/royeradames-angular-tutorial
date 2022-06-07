import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-arrow",
  templateUrl: "./arrow.component.html",
  styleUrls: ["./arrow.component.scss"],
})
export class ArrowComponent implements OnInit {
  // @Input() direction: "left" | "right" = "left";
  @Input() style = "";
  constructor() {
    // if (this.direction === "right") this.style = "transform: rotate(180deg)";
    // if (this.direction === "right") this.style = "transform: scale(-1,1)";
    // this.style = "";
  }

  ngOnInit(): void {}
}
