import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCoursesComponent} from './course/manage-courses/manage-courses.component';
import {CourseResolver} from './course/course.resolver';
import {ManageCoursesUpdateComponent} from './course/manage-courses/manage-courses-update/manage-courses-update.component';
import {ManageCoursesDetailsComponent} from './course/manage-courses/manage-courses-details/manage-courses-details.component';
import {ManageTeachersComponent} from './teacher/manage-teachers/manage-teachers.component';
import {ManageTeachersUpdateComponent} from './teacher/manage-teachers/manage-teachers-update/manage-teachers-update.component';
import {ManageTeachersDetailsComponent} from './teacher/manage-teachers/manage-teachers-details/manage-teachers-details.component';
import {TeacherResolver} from './teacher/teacher.resolver';
import {ManageSubjectsComponent} from './subject/manage-subjects/manage-subjects.component';
import {ManageSubjectsUpdateComponent} from './subject/manage-subjects/manage-subjects-update/manage-subjects-update.component';
import {SubjectResolver} from './subject/subject.resolver';
import {ManageSubjectsDetailsComponent} from './subject/manage-subjects/manage-subjects-details/manage-subjects-details.component';
import {ViewSubjectsComponent} from './subject/view-subjects/view-subjects.component';
import {ViewCoursesComponent} from './course/view-courses/view-courses.component';
import {ViewTeachersComponent} from './teacher/view-teachers/view-teachers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'coursesview',
        component: ViewCoursesComponent
      },
      {
        path: 'teachersview',
        component: ViewTeachersComponent
      },
      {
        path: 'subjectsview',
        component: ViewSubjectsComponent
      },
      {
        path: 'managecourses',
        component: ManageCoursesComponent
      },
      {
        path: 'managecourses/new',
        component: ManageCoursesUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'managecourses/:id/edit',
        component: ManageCoursesUpdateComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'managecourses/:id/view',
        component: ManageCoursesDetailsComponent,
        resolve: {
          course: CourseResolver
        }
      },
      {
        path: 'manageteachers',
        component: ManageTeachersComponent
      },
      {
        path: 'manageteachers/new',
        component: ManageTeachersUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'manageteachers/:id/edit',
        component: ManageTeachersUpdateComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'manageteachers/:id/view',
        component: ManageTeachersDetailsComponent,
        resolve: {
          teacher: TeacherResolver
        }
      },
      {
        path: 'managesubjects',
        component: ManageSubjectsComponent
      },
      {
        path: 'managesubjects/new',
        component: ManageSubjectsUpdateComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'managesubjects/:id/edit',
        component: ManageSubjectsUpdateComponent,
        resolve: {
          subject: SubjectResolver
        }
      },
      {
        path: 'managesubjects/:id/view',
        component: ManageSubjectsDetailsComponent,
        resolve: {
          subject: SubjectResolver
        }
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UniversityRoutingModule { }
