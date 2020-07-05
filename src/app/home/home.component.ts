import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../university/teacher/teacher.service';
import {CourseService} from '../university/course/course.service';
import {ITeacher, Teacher} from '../university/teacher/teacher.model';
import {ICourse} from '../university/course/course.model';
import {Observable} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {forEachComment} from 'tslint';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allTeachers: Array<ITeacher> = new Array<ITeacher>();
  public allCourses: Array<ICourse> = new Array<ICourse>();
  public lastTeacher: ITeacher;
  getterTime: Date = new Date();
  actualTime: number;

  constructor(private teacherService: TeacherService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeachers().subscribe(data => {
      this.spinner.hide();
      data.forEach(val => this.allTeachers.push(Object.assign({}, val)));
      this.getLastModifiedTeacher()
    }, err => {
      this.spinner.hide();
    });

  }

  public getLastModifiedTeacher() {
    let lastModTeacher: ITeacher = this.allTeachers[0];

    for (let teacher of this.allTeachers) {
      if (teacher.modifiedDate >= lastModTeacher.modifiedDate) {
        lastModTeacher = teacher;
      }
    }

    this.lastTeacher= lastModTeacher;
  }

  public getLastModifiedCourse() {

  }

}
