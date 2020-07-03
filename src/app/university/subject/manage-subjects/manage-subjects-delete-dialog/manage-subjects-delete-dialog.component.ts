import { Component, OnInit } from '@angular/core';
import {ICourse} from '../../../course/course.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {CourseService} from '../../../course/course.service';
import {ISubject} from '../../subject.model';
import {SubjectService} from '../../subject.service';

@Component({
  selector: 'app-manage-subjects-delete-dialog',
  templateUrl: './manage-subjects-delete-dialog.component.html',
  styleUrls: ['./manage-subjects-delete-dialog.component.scss']
})
export class ManageSubjectsDeleteDialogComponent implements OnInit {
  subject?: ISubject;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.subjectService.deleteSubject(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Subject successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting subject with ID: ' + id , 'Error');
      });
  }
}
