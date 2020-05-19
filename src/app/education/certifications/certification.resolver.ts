import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ICertification, Certification } from './certification.model';
import { CertificationService } from './certification.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({ providedIn: 'root' })
export class CertificationResolver implements Resolve<ICertification> {
  constructor(private router: Router, private spinner: NgxSpinnerService, private certificationService: CertificationService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICertification> | Observable<never> {
    const id = route.params.id;
    if (id) {
      this.spinner.show();
      return this.certificationService.getCertificationById(id).pipe(map((data: ICertification) => {
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
    return of(new Certification());
  }
}
