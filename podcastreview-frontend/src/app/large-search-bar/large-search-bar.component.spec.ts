import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeSearchBarComponent } from './large-search-bar.component';

describe('LargeSearchBarComponent', () => {
  let component: LargeSearchBarComponent;
  let fixture: ComponentFixture<LargeSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
