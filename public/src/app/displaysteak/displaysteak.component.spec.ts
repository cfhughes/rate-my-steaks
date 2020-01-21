import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysteakComponent } from './displaysteak.component';

describe('DisplaysteakComponent', () => {
  let component: DisplaysteakComponent;
  let fixture: ComponentFixture<DisplaysteakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysteakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysteakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
