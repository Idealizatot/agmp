import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseComponent } from './course.component';
import { Course } from '../../course'

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

    component.course = {
      id: 1,
      title: 'a new component',
      description: '',
      courseDuration: new Date(),
      creationDate: new Date(),
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain input data', () => {
    fixture.detectChanges();
    const titleHTML = fixture.nativeElement as HTMLElement;
    expect(titleHTML.querySelector('h3')?.textContent).toContain('a new component');
  });

  it('should contain clickable button', () => {
    spyOn(component, 'delete');

    const buttonHTML = fixture.debugElement.query(By.css('.delete'));
    buttonHTML.triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(component.delete).toHaveBeenCalled();
  });

});
