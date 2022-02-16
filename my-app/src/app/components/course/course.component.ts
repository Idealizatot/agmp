import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course!: Course;

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit(this.course.id);
  }

}
