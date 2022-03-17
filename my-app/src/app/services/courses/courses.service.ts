import { Injectable, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Course } from 'src/app/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  subjectCourses: BehaviorSubject<Course[]> = new BehaviorSubject([] as Course[]);
  сourses: Course[] = [
    {
      id: 1,
      title: 'WILDLIFE WATCH',
      description: 'THE BEST OF NATIONAL GEOGRAPHIC DELIVERED TO YOUR INBOX',
      courseDuration: new Date(),
      creationDate: new Date('08-08-2022')
    },
    {
      id: 2,
      title: 'Source of mysterious global tsunami found near Antarctica',
      description: 'A rare, multi-part earthquake that disturbed waters in three oceans is helping scientists understand how different types of quakes can trigger tsunamis.',
      courseDuration: new Date(),
      creationDate: new Date('02-02-2022'),
      topRated: true
    },
    {
      id: 3,
      title: 'Most U.S. wolves are listed as endangered—again. Here’s why.',
      description: 'A new court decision protects wolves, except in the Northern Rockies, just over a year after they were delisted. What’s next in the chaotic world of wolf conservation?',
      courseDuration: new Date(),
      creationDate: new Date('08-08-2021')
    }
  ];
  
  constructor() {
    this.subjectCourses.next(this.сourses);
  }

  getСourseList(): BehaviorSubject<Course[]> {
    return this.subjectCourses;
  }

  createCourse(course: Course): void {
    this.subjectCourses.next([...this.subjectCourses.getValue(), course]);
  }

  getCourse(id: number): Course | undefined {
    return this.subjectCourses.getValue().find((item) => item.id === id);
  }

  updateCourse(id: number, updCourse: Course): void {

  }

  removeCourse(id: number): void {
    this.subjectCourses.next(this.subjectCourses.getValue().filter((item) => item.id !== id));
  }

}
