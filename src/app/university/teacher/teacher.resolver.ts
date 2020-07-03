import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TeacherService } from './teacher.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {ITeacher,Teacher} from './teacher.model';

@Injectable({ providedIn: 'root' })
export class TeacherResolver implements Resolve<ITeacher> {
  constructor(private router: Router, private spinner: NgxSpinnerService, private teacherService: TeacherService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITeacher> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.teacherService.getTeacherById(id).pipe(map((data: ITeacher) => {
        this.spinner.hide();
        if (data) {
          return data;
        } else {
          this.router.navigate(['404']);
          return null;
        }
      }, err => {
        this.spinner.hide();
      }), take(1));
    }
    return of(new Teacher());
  }
}
