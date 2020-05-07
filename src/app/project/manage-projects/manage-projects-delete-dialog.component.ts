import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from '../project.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-manage-projects-delete-dialog',
  templateUrl: './manage-projects-delete-dialog.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsDeleteDialogComponent implements OnInit {
  project?: IProject;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.activeModal.close();
    this.toastr.warning('Data successfully deleted', 'Warning');
  }

}
