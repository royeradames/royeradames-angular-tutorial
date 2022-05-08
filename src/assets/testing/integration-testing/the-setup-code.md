This is the boiler plate code we need to do integration testing.

`TestBed` Provided a number of utilities class we need for integration testing.
- `TestBed.configuredTestingModule`: acts like `*.module.ts @NgModule()`
- `TestBed.createComponent()`: creates a component instance
  - Note that it return a ComponentFixture not an instance of the class
  - gives access to the instance and most of its template 
  - `.nativeElement` that returns root html element of the component
  - `.debugElement`: has useful methods for querying the DOM 
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