import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from 'src/app/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesUpdated = new Subject();
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

  constructor() { }

  getСourseList(): Course[] {
    return [...this.сourses];
  }

  createCourse(course: Course): void {
    this.сourses.push(course);
    this.coursesUpdated.next(true);
  }

  getCourse(id: number): Course | undefined {
    return this.сourses.find((item) => item.id === id);
  }

  updateCourse(id: number, updCourse: Course): void {

  }

  removeCourse(id: number): void {
    this.сourses = this.сourses.filter((item) => item.id !== id);
    this.coursesUpdated.next(true);
  }

}
