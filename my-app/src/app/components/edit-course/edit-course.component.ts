import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CoursesService
  ) { }

  ngOnInit(): void {
    this.route.snapshot.data
  }

}
