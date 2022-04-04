import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/course';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course?: Course;
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    courseDuration: new FormControl(new Date()),
    topRated: new FormControl(false),
  });
  routeSubscribe?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: CoursesService
  ) { }

  ngOnInit(): void {
    this.routeSubscribe = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (typeof id === 'string') {
        this.course = this.service.getCourse(+id);
        this.setDataToForm();
      }
    });
  }

  setDataToForm() {
    this.form.controls['title'].setValue(this.course!['title']);
    this.form.controls['description'].setValue(this.course!['description']);
    this.form.controls['courseDuration'].setValue(this.course!['courseDuration']);
    this.form.controls['topRated'].setValue(this.course!['topRated']);
  }

  ngOnDestroy(): void {
    this.routeSubscribe?.unsubscribe();
  }

}
