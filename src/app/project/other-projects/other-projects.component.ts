import { Component, OnInit } from '@angular/core';
import { IProject } from '../project.model';
import { ProjectService } from '../project.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss']
})
export class OtherProjectsComponent implements OnInit {

  projects: IProject[] | null = null;

  constructor(private projectService: ProjectService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.projectService.getProjectsByType(false).subscribe(data => {
      this.spinner.hide();
      this.projects = data;
    });
  }

}
