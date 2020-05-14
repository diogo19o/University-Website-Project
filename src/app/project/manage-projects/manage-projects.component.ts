import { Component, OnInit } from '@angular/core';
import { IProject } from '../project.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManageProjectsDeleteDialogComponent } from './manage-projects-delete-dialog.component';
import { ProjectService } from '../project.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsComponent implements OnInit {
  projects?: IProject[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  projectService: ProjectService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.projectService.getProjects().subscribe((data: IProject[])  => {
      this.spinner.hide();
      this.projects = data;
    });
  }

  trackId(index: number, item: IProject): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Number(item.id);
  }

  delete(project: IProject): void {
    const modalRef = this.modalService.open(ManageProjectsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.project = project;
  }
}
