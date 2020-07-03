import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../subject/subject.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ICourse} from '../course.model';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {
  courses: ICourse[] | null = null;

  constructor(private courseService: CourseService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.courseService.getCourses().subscribe(data => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }
}
