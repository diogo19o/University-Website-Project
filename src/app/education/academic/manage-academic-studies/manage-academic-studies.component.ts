import { Component, OnInit } from '@angular/core';
import {ICertification} from '../../certifications/certification.model';
import {IAcademic} from '../academic.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {AcademicService} from '../academic.service';
import {ManageAcademicStudiesDeleteDialogComponent} from './manage-academic-studies-delete-dialog/manage-academic-studies-delete-dialog.component';

@Component({
  selector: 'app-manage-academic-studies',
  templateUrl: './manage-academic-studies.component.html',
  styleUrls: ['./manage-academic-studies.component.scss']
})
export class ManageAcademicStudiesComponent implements OnInit {
  academicstudies?: IAcademic[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  academicService: AcademicService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.academicService.getAcademics().subscribe((data: IAcademic[])  => {
      this.spinner.hide();
      this.academicstudies = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: IAcademic): number {
    return Number(item.id);
  }

  delete(academic: IAcademic): void {
    const modalRef = this.modalService.open(ManageAcademicStudiesDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.academic = academic;
  }

}
