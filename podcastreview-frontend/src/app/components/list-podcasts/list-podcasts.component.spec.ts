import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPodcastsComponent } from './list-podcasts.component';

describe('ListPodcastsComponent', () => {
  let component: ListPodcastsComponent;
  let fixture: ComponentFixture<ListPodcastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPodcastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
