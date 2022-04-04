import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseComponent } from './course.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ CourseComponent ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
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
    expect(titleHTML.querySelector('h3')?.textContent?.toLocaleLowerCase()).toContain('a new component');
  });

  it('should contain clickable button', () => {
    spyOn(component, 'delete');

    const buttonHTML = fixture.debugElement.query(By.css('.delete'));
    buttonHTML.triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(component.delete).toHaveBeenCalled();
  });

});
