import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeLogoComponent } from './large-logo.component';

describe('LargeLogoComponent', () => {
  let component: LargeLogoComponent;
  let fixture: ComponentFixture<LargeLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
