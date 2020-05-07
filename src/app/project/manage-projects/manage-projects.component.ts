import { Component, OnInit, OnDestroy } from '@angular/core';
import {IProject, Project} from '../project.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ManageProjectsDeleteDialogComponent} from './manage-projects-delete-dialog.component';


@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsComponent implements OnInit {
  projects?: IProject[] = [];

  constructor(protected modalService: NgbModal) { }

  ngOnInit(): void {
    this.projects.push(this.mockProject(1));
    this.projects.push(this.mockProject(2));
  }

  trackId(index: number, item: IProject): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id;
  }

  delete(project: IProject): void {
    const modalRef = this.modalService.open(ManageProjectsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.project = project;
  }

  private mockProject(id: number): Project  {
    return new Project(id, 'Project X', 'X', 'ULHT', 'Campo Grande 25', 'Lisboa', 'Lisboa', '1234-234');
  }

}
