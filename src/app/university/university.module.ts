import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UniversityRoutingModule} from './university-routing.module';
import { ManageCoursesComponent } from './course/manage-courses/manage-courses.component';
import { ManageCoursesUpdateComponent } from './course/manage-courses/manage-courses-update/manage-courses-update.component';
import { ManageCoursesDetailsComponent } from './course/manage-courses/manage-courses-details/manage-courses-details.component';
import { ManageCoursesDeleteDialogComponent } from './course/manage-courses/manage-courses-delete-dialog/manage-courses-delete-dialog.component';
import { ManageTeachersComponent } from './teacher/manage-teachers/manage-teachers.component';
import { ManageTeachersUpdateComponent } from './teacher/manage-teachers/manage-teachers-update/manage-teachers-update.component';
import { ManageTeachersDetailsComponent } from './teacher/manage-teachers/manage-teachers-details/manage-teachers-details.component';
import { ManageTeachersDeleteDialogComponent } from './teacher/manage-teachers/manage-teachers-delete-dialog/manage-teachers-delete-dialog.component';
import { ManageSubjectsComponent } from './subject/manage-subjects/manage-subjects.component';
import { ManageSubjectsDeleteDialogComponent } from './subject/manage-subjects/manage-subjects-delete-dialog/manage-subjects-delete-dialog.component';
import { ManageSubjectsDetailsComponent } from './subject/manage-subjects/manage-subjects-details/manage-subjects-details.component';
import { ManageSubjectsUpdateComponent } from './subject/manage-subjects/manage-subjects-update/manage-subjects-update.component';
import { ViewSubjectsComponent } from './subject/view-subjects/view-subjects.component';
import { ViewCoursesComponent } from './course/view-courses/view-courses.component';
import { ViewTeachersComponent } from './teacher/view-teachers/view-teachers.component';

@NgModule({
  declarations: [
    ManageCoursesComponent,
    ManageCoursesUpdateComponent,
    ManageCoursesDetailsComponent,
    ManageCoursesDeleteDialogComponent,
    ManageTeachersComponent,
    ManageTeachersUpdateComponent,
    ManageTeachersDetailsComponent,
    ManageTeachersDeleteDialogComponent,
    ManageSubjectsComponent,
    ManageSubjectsDeleteDialogComponent,
    ManageSubjectsDetailsComponent,
    ManageSubjectsUpdateComponent,
    ViewSubjectsComponent,
    ViewCoursesComponent,
    ViewTeachersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
