import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EducationRoutingModule} from './education-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ManageAcademicStudiesComponent} from './academic/manage-academic-studies/manage-academic-studies.component';
import {ManageCertificationsComponent} from './certifications/manage-certifications/manage-certifications.component';
import {MyAcademicStudiesComponent} from './academic/my-academic-studies/my-academic-studies.component';
import {MyCertificationsComponent} from './certifications/my-certifications/my-certifications.component';
import { ManageCertificationsUpdateComponent } from './certifications/manage-certifications/manage-certifications-update/manage-certifications-update.component';
import { ManageAcademicStudiesUpdateComponent } from './academic/manage-academic-studies/manage-academic-studies-update/manage-academic-studies-update.component';


@NgModule({
  declarations: [
    ManageAcademicStudiesComponent,
    ManageCertificationsComponent,
    MyAcademicStudiesComponent,
    MyCertificationsComponent,
    ManageCertificationsUpdateComponent,
    ManageAcademicStudiesUpdateComponent],
  imports: [
    CommonModule,
    SharedModule,
    EducationRoutingModule
  ]
})
export class EducationModule {
}
