import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from '../project.model';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-manage-projects-delete-dialog',
  templateUrl: './manage-projects-delete-dialog.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsDeleteDialogComponent implements OnInit {
    project?: IProject;

    constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private projectService: ProjectService) { }

    ngOnInit(): void {
    }

    clear(): void {
      this.activeModal.dismiss();
    }

    confirmDelete(id: string): void {
      this.projectService.deleteProject(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Project successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting project with ID: ' + id , 'Error');
      });
  }
}
