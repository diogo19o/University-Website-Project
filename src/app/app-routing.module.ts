import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbarRoute } from './layouts/navbar/navbar.route';
import {ContactsComponent} from './contacts/contacts.component';

const LAYOUT_ROUTES = [navbarRoute];

const appRoutes: Routes = [
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule'
  },
  {
    path: 'education',
    loadChildren: './education/education.module#EducationModule'
  },
  {
    path: 'university',
    loadChildren: './university/university.module#UniversityModule'
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  ...LAYOUT_ROUTES
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
