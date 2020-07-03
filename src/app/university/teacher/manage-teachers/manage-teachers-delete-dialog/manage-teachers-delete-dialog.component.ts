import { Component, OnInit } from '@angular/core';
import {ICertification} from '../../../../education/certifications/certification.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ITeacher} from '../../teacher.model';
import {TeacherService} from '../../teacher.service';

@Component({
  selector: 'app-manage-teachers-delete-dialog',
  templateUrl: './manage-teachers-delete-dialog.component.html',
  styleUrls: ['./manage-teachers-delete-dialog.component.scss']
})
export class ManageTeachersDeleteDialogComponent implements OnInit {
  teacher?: ITeacher;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.teacherService.deleteTeacher(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Teacher successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting teacher with ID: ' + id , 'Error');
      });
  }
}
