import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Course } from 'src/app/course';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoursesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (typeof id === 'string') {
        this.course = this.service.getCourse(+id);
      }
      console.log(this.course);
    });
  }

}
