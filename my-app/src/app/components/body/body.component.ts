import { Component, OnInit } from '@angular/core';

import { Course } from 'src/app/course';

const courses: Course[] = [
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

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  courses: Course[];

  searchWord = '';

  constructor() {
    this.courses = courses;
  }

  ngOnInit(): void {
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
    console.log(`parent deletes course with id = ${data}`);
  }

}
