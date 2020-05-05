import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPersonnelProjectsComponent } from './my-personnel-projects/my-personnel-projects.component';
import { ManageProjectsComponent} from './manage-projects/manage-projects.component';

const routes: Routes = [
  {
    path: 'project',
    children: [
      { path: 'mypersonnelprojects', component: MyPersonnelProjectsComponent },
      { path: 'manageprojects', component:  ManageProjectsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
