import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ITeacher} from '../teacher.model';
import {TeacherService} from '../teacher.service';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.component.html',
  styleUrls: ['./view-teachers.component.scss']
})
export class ViewTeachersComponent implements OnInit {
  teachers: ITeacher[] | null = null;

  constructor(private teacherService: TeacherService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.teacherService.getTeachers().subscribe(data => {
      this.spinner.hide();
      this.teachers = data;
    }, err => {
      this.spinner.hide();
    });
  }
}
