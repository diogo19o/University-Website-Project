import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {CourseService} from '../course.service';
import {ICourse} from '../course.model';
import {ManageCoursesDeleteDialogComponent} from './manage-courses-delete-dialog/manage-courses-delete-dialog.component';
import {TeacherService} from '../../teacher/teacher.service';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {
  courses?: ICourse[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  courseService: CourseService, private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.courseService.getCourses().subscribe((data: ICourse[])  => {
      this.spinner.hide();
      this.courses = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ICourse): number {
    return Number(item.id);
  }

  delete(course: ICourse): void {
    const modalRef = this.modalService.open(ManageCoursesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }
}
