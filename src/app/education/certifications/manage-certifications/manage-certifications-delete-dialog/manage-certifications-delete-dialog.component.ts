import { Component, OnInit } from '@angular/core';
import {IProject} from '../../../../project/project.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ICertification} from '../../certification.model';
import {CertificationService} from '../../certification.service';

@Component({
  selector: 'app-manage-certifications-delete-dialog',
  templateUrl: './manage-certifications-delete-dialog.component.html',
  styleUrls: ['./manage-certifications-delete-dialog.component.scss']
})
export class ManageCertificationsDeleteDialogComponent implements OnInit {
  certification?: ICertification;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private certificationService: CertificationService) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.certificationService.deleteCertification(id).then(() => {
        this.activeModal.close();
        this.toastr.success('Certification successfully deleted', 'Suceess');
      },
      err => {
        this.toastr.error('An error occurred while deleting certification with ID: ' + id , 'Error');
      });
  }
}
