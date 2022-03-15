import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from 'src/app/course';

import { CoursesService } from 'src/app/services/courses/courses.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  courses: Course[] = [];
  coursesSubscription: Subscription = new Subscription();
  searchWord = '';

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.getСourseList();
    this.coursesSubscription = this.courseService.coursesUpdated.subscribe(() => {
      this.courses = this.courseService.getСourseList();
    });

    // for test
    setTimeout(() => {
      console.log('5000');
      this.courseService.createCourse({
        id: 12345,
        title: 'test4',
        description: 'description',
        courseDuration: new Date(),
        creationDate: new Date(),
      });
    }, 5000);
  }

  trackByItems(index: number, item: Course): number {
    return item.id;
  }

  setSearctWord(word: string) {
    this.searchWord = word;
  }

  loadCourse() {
    console.log('load course')
  }

  deleteCourse(data: number) {
    this.courseService.removeCourse(data);
    console.log(`parent deletes course with id = ${data}`);
  }

  ngOnDestroy(): void {
      this.coursesSubscription.unsubscribe();
  }
}
