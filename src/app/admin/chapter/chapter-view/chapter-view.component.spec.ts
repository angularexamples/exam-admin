import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterViewComponent } from './chapter-view.component';

describe('ChapterViewComponent', () => {
  let component: ChapterViewComponent;
  let fixture: ComponentFixture<ChapterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
