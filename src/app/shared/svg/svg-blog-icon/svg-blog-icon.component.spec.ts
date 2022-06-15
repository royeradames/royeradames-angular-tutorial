import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBlogIconComponent } from './svg-blog-icon.component';

describe('SvgBlogIconComponent', () => {
  let component: SvgBlogIconComponent;
  let fixture: ComponentFixture<SvgBlogIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgBlogIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBlogIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
