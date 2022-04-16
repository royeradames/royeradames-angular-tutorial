import { ComponentFixture, TestBed } from "@angular/core/testing";

import { tutorialTemplateComponent } from "./tutorial-template.component";

describe("TemplateComponent", () => {
  let component: tutorialTemplateComponent;
  let fixture: ComponentFixture<tutorialTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tutorialTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tutorialTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
