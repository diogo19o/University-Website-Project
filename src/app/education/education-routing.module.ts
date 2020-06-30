import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {MyCertificationsComponent} from './certifications/my-certifications/my-certifications.component';
import {MyAcademicStudiesComponent} from './academic/my-academic-studies/my-academic-studies.component';
import {ManageCertificationsUpdateComponent} from './certifications/manage-certifications/manage-certifications-update/manage-certifications-update.component';
import {ManageAcademicStudiesUpdateComponent} from './academic/manage-academic-studies/manage-academic-studies-update/manage-academic-studies-update.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'myacademicstudies',
        component: MyAcademicStudiesComponent
      },
      {
        path: 'manageacademicstudies',
        component: ManageAcademicStudiesComponent
      },
      {
        path: 'manageacademicstudies/new',
        component: ManageAcademicStudiesUpdateComponent
      },
      {
        path: 'mycertifications',
        component: MyCertificationsComponent
      },
      {
        path: 'managecertifications',
        component: ManageCertificationsComponent
      },
      {
        path: 'managecertifications/new',
        component: ManageCertificationsUpdateComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EducationRoutingModule { }
