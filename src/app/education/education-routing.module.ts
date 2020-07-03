import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAcademicStudiesComponent } from './academic/manage-academic-studies/manage-academic-studies.component';
import { ManageCertificationsComponent } from './certifications/manage-certifications/manage-certifications.component';
import {MyCertificationsComponent} from './certifications/my-certifications/my-certifications.component';
import {MyAcademicStudiesComponent} from './academic/my-academic-studies/my-academic-studies.component';
import {ManageCertificationsUpdateComponent} from './certifications/manage-certifications/manage-certifications-update/manage-certifications-update.component';
import {ManageAcademicStudiesUpdateComponent} from './academic/manage-academic-studies/manage-academic-studies-update/manage-academic-studies-update.component';
import {ManageCertificationsDetailsComponent} from './certifications/manage-certifications/manage-certifications-details/manage-certifications-details.component';
import {CertificationResolver} from './certifications/certification.resolver';

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
        component: ManageAcademicStudiesUpdateComponent,
        resolve: {
          academic: CertificationResolver
        }
      },
      {
        path: 'managecertifications',
        component: ManageCertificationsComponent
      },
      {
        path: 'managecertifications/new',
        component: ManageCertificationsUpdateComponent,
        resolve: {
          certification: CertificationResolver
        }
      },
      {
        path: 'managecertifications/:id/edit',
        component: ManageCertificationsUpdateComponent,
        resolve: {
          certification: CertificationResolver
        }
      },
      {
        path: 'managecertifications/:id/view',
        component: ManageCertificationsDetailsComponent,
        resolve: {
          certification: CertificationResolver
        }
      },
      {
        path: 'mycertifications',
        component: MyCertificationsComponent
      },
      {
        path: 'mycertifications/:id/view',
        component: ManageCertificationsDetailsComponent,
        resolve: {
          certification: CertificationResolver
        }
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EducationRoutingModule { }
