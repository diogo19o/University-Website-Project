import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../university/teacher/teacher.service';
import {ITeacher} from '../university/teacher/teacher.model';
import {ICourse} from '../university/course/course.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ISubject} from '../university/subject/subject.model';
import {SubjectService} from '../university/subject/subject.service';
import {CourseService} from '../university/course/course.service';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public allTeachers: Array<ITeacher> = new Array<ITeacher>();
  public allSubjects: Array<ISubject> = new Array<ISubject>();
  public allCourses: Array<ICourse> = new Array<ICourse>();
  public lastTeacher: ITeacher;
  public lastSubject: ISubject;
  public lastCourse: ICourse;

  constructor(private teacherService: TeacherService,
              private subjectService: SubjectService,
              private courseService: CourseService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeachers().subscribe(data => {
      data.forEach(val => this.allTeachers.push(Object.assign({}, val)));
      this.lastTeacher = this.getLastModifiedTeacher();
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
    this.subjectService.getSubjects().subscribe(data => {
      data.forEach(val => this.allSubjects.push(Object.assign({}, val)));
      this.lastSubject = this.getLastModifiedSubject();
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
    this.courseService.getCourses().subscribe(data => {
      data.forEach(val => this.allCourses.push(Object.assign({}, val)));
      this.lastCourse = this.getLastModifiedCourse();
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }

  public getLastModifiedTeacher(): ITeacher {
    let lastModTeacher: ITeacher = this.allTeachers[0];

    for (const teacher of this.allTeachers) {
      if (teacher.modifiedDate >= lastModTeacher.modifiedDate) {
        lastModTeacher = teacher;
      }
    }

    return lastModTeacher;
  }

  public getLastModifiedSubject(): ISubject {
    let lastModSubject: ISubject = this.allSubjects[0];
    console.log(lastModSubject.subjectName);
    for (const subject of this.allSubjects) {
      if (subject.modifiedDate >= lastModSubject.modifiedDate) {
        console.log(lastModSubject.subjectName);
        lastModSubject = subject;
      }
    }

    return lastModSubject;
  }

  public getLastModifiedCourse(): ICourse {
    let lastModCourse: ICourse = this.allCourses[0];

    for (const course of this.allCourses) {
      if (course.modifiedDate >= lastModCourse.modifiedDate) {
        lastModCourse = course;
      }
    }

    return lastModCourse;
  }

}
