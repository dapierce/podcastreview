import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeLoginComponent } from './large-login.component';

describe('LargeLoginComponent', () => {
  let component: LargeLoginComponent;
  let fixture: ComponentFixture<LargeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
