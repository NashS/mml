import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkAddCourseModalComponent } from './homework-add-course-modal.component';

describe('HomeworkAddCourseModalComponent', () => {
  let component: HomeworkAddCourseModalComponent;
  let fixture: ComponentFixture<HomeworkAddCourseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkAddCourseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkAddCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
