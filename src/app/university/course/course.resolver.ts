import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import {Course, ICourse} from './course.model';
import {CourseService} from './course.service';

@Injectable({ providedIn: 'root' })
export class CourseResolver implements Resolve<ICourse> {
  constructor(private router: Router, private spinner: NgxSpinnerService, private courseService: CourseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICourse> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.courseService.getCourseById(id).pipe(map((data: ICourse) => {
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
    return of(new Course());
  }
}
