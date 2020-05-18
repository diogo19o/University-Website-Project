import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { IProject } from '../project.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-personnel-projects',
  templateUrl: './my-personnel-projects.component.html',
  styleUrls: ['./my-personnel-projects.component.scss']
})
export class MyPersonnelProjectsComponent implements OnInit {

  projects: IProject[] | null = null;

  constructor(private projectService: ProjectService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.projectService.getProjectsByType(true).subscribe(data => {
      this.spinner.hide();
      this.projects = data;
    }, err => {
      this.spinner.hide();
    });
  }

}
