import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLinkedinIconComponent } from './svg-linkedin-icon.component';

describe('SvgLinkedinIconComponent', () => {
  let component: SvgLinkedinIconComponent;
  let fixture: ComponentFixture<SvgLinkedinIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgLinkedinIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLinkedinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
