Generated by  ng CLI when creating a new component. This is the boiler plate code we need to do integration testing. Testing a component logic, and boiler plate. 

`TestBed` Provided a number of utilities class we need for integration testing.
- `TestBed.configuredTestingModule`: acts like `*.module.ts @NgModule()`
- `TestBed.createComponent()`: creates a component instance
  - Note that it return a ComponentFixture not an instance of the class
  - gives access to the instance and most of its template 
  - `.nativeElement` that returns root html element of the component
  - `.debugElement`: has useful methods for querying the DOM 

This can be accomplish when generating a new component with ng cli
`ng generate component <component-name>`

The only difference is that the cli template uses `.compileComponents()` but this is not necessary.

Why?

when we use Web pack, the components implementation as well as its template and stylesheet are all in the same JavaScript file so we don't need to call this compile components

Example of a generated spec file:

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseComponent } from './release.component';

describe('ReleaseComponent', () => {
  let component: ReleaseComponent;
  let fixture: ComponentFixture<ReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

```

## Practice

Set up testing for integration test.

```ts
 import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent],
    });

    fixture = TestBed.createComponent(VoterComponent);
  });

  it('', () => {});
});
```

No need to remove the `.compileComponents()` from generated spec files.