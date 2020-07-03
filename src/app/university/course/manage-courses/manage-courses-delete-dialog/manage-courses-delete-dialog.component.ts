import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ICourse} from '../../course.model';
import {CourseService} from '../../course.service';

@Component({
  selector: 'app-manage-courses-delete-dialog',
  templateUrl: './manage-courses-delete-dialog.component.html',
  styleUrls: ['./manage-courses-delete-dialog.component.scss']
})
export class ManageCoursesDeleteDialogComponent implements OnInit {
  course?: ICourse;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private courseService: CourseService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.courseService.deleteCourse(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Certification successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting certification with ID: ' + id , 'Error');
      });
  }
}
