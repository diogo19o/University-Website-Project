import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { MyPersonnelProjectsComponent } from './my-personnel-projects/my-personnel-projects.component';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [ManageProjectsComponent, MyPersonnelProjectsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
