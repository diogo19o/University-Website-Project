import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  getMemberSpecializationByValue(memberSpecialization: string): string {
    let translatedSpec = '';
    switch (memberSpecialization) {
      case 'PM':
        translatedSpec = 'Project Manager';
        break;
      case 'TECH_ARCH':
        translatedSpec = 'Technical Architect';
        break;
      case 'DEVOPS':
        translatedSpec = 'DevOps';
        break;
      case 'SD':
        translatedSpec = 'Senior Developer';
        break;
      case 'D':
        translatedSpec = 'Developer';
        break;
      case 'TM':
        translatedSpec = 'Test Manager';
        break;
      case 'T':
        translatedSpec = 'Tester';
        break;
    }
    return translatedSpec;
  }
}
