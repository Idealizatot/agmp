import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course.title = '123';
    fixture.detectChanges();
    component.course.title = '543';
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
