import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProject, Project } from './project.model';

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<IProject> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProject> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return of(new Project(id, 'Project X', 'X', 'ULHT', 'Campo Grande 25', 'Lisboa', 'Lisboa', '1234-234'));
    } else {
      return of(new Project());
    }
    return of(new Project());
  }
}
