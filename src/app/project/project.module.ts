import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ManageProjectsUpdateComponent } from './manage-projects/manage-projects-update.component';
import { ManageProjectsDetailComponent } from './manage-projects/manage-projects-detail.component';
import { ManageProjectsDeleteDialogComponent } from './manage-projects/manage-projects-delete-dialog.component';
import { MyPersonnelProjectsComponent } from './my-personnel-projects/my-personnel-projects.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';


@NgModule({
  declarations: [
    ManageProjectsComponent,
    ManageProjectsUpdateComponent,
    ManageProjectsDetailComponent,
    ManageProjectsDeleteDialogComponent,
    MyPersonnelProjectsComponent,
    OtherProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  entryComponents: [ManageProjectsDeleteDialogComponent]
})
export class ProjectModule { }
