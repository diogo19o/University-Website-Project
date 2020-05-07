import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPersonnelProjectsComponent } from './my-personnel-projects/my-personnel-projects.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ManageProjectsUpdateComponent } from './manage-projects/manage-projects-update.component';
import { ManageProjectsDetailComponent } from './manage-projects/manage-projects-detail.component';
import { ProjectResolver } from './project.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manageprojects',
        component: ManageProjectsComponent
      },
      {
        path: 'manageprojects/:id/view',
        component: ManageProjectsDetailComponent,
        resolve: {
          project: ProjectResolver
        }
      },
      {
        path: 'manageprojects/new',
        component: ManageProjectsUpdateComponent,
        resolve: {
          project: ProjectResolver
        }
      },
      {
        path: 'manageprojects/:id/edit',
        component: ManageProjectsUpdateComponent,
        resolve: {
          project: ProjectResolver
        }
      },
      {
        path: 'mypersonnelprojects',
        component:  MyPersonnelProjectsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
