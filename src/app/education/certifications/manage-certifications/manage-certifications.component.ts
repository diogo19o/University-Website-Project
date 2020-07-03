import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {ICertification} from '../certification.model';
import {CertificationService} from '../certification.service';
import {ManageCertificationsDeleteDialogComponent} from './manage-certifications-delete-dialog/manage-certifications-delete-dialog.component';

@Component({
  selector: 'app-manage-certifications',
  templateUrl: './manage-certifications.component.html',
  styleUrls: ['./manage-certifications.component.scss']
})
export class ManageCertificationsComponent implements OnInit {
  certifications?: ICertification[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  certificationService: CertificationService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.certificationService.getCertifications().subscribe((data: ICertification[])  => {
      this.spinner.hide();
      this.certifications = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ICertification): number {
    return Number(item.id);
  }

  delete(certification: ICertification): void {
    const modalRef = this.modalService.open(ManageCertificationsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.certification = certification;
  }
}
