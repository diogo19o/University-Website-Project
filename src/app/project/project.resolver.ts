import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IProject, Project } from './project.model';
import { ProjectService } from './project.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<IProject> {
  constructor(private router: Router, private spinner: NgxSpinnerService, private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProject> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.projectService.getProjectById(id).pipe(map((data: IProject) => {
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
    return of(new Project());
  }
}
