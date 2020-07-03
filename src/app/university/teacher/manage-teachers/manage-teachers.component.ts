import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {ITeacher} from '../teacher.model';
import {TeacherService} from '../teacher.service';
import {ManageTeachersDeleteDialogComponent} from './manage-teachers-delete-dialog/manage-teachers-delete-dialog.component';
import {ISubject} from '../../subject/subject.model';
import {SubjectService} from '../../subject/subject.service';
import {ManageSubjectsDeleteDialogComponent} from '../../subject/manage-subjects/manage-subjects-delete-dialog/manage-subjects-delete-dialog.component';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.scss']
})
export class ManageTeachersComponent implements OnInit {
  teachers?: ITeacher[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  teacherService: TeacherService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeachers().subscribe((data: ITeacher[])  => {
      this.spinner.hide();
      this.teachers = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ITeacher): number {
    return Number(item.id);
  }

  delete(teacher: ITeacher): void {
    const modalRef = this.modalService.open(ManageTeachersDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.teacher = teacher;
  }
}
