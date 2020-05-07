import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IProject } from '../project.model';

@Component({
  selector: 'app-manage-projects-detail',
  templateUrl: './manage-projects-detail.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsDetailComponent implements OnInit {
  project: IProject | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ project }) => {
      this.project = project;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
