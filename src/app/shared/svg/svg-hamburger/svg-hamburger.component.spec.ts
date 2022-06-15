import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHamburgerComponent } from './svg-hamburger.component';

describe('SvgHamburgerComponent', () => {
  let component: SvgHamburgerComponent;
  let fixture: ComponentFixture<SvgHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgHamburgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
