import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {ISubject} from '../subject.model';
import {SubjectService} from '../subject.service';
import {ManageSubjectsDeleteDialogComponent} from './manage-subjects-delete-dialog/manage-subjects-delete-dialog.component';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {
  subjects?: ISubject[] = [];

  constructor(protected modalService: NgbModal, private spinner: NgxSpinnerService, private  subjectService: SubjectService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.subjectService.getSubjects().subscribe((data: ISubject[])  => {
      this.spinner.hide();
      this.subjects = data;
    }, err => {
      this.spinner.hide();
    });
  }

  trackId(index: number, item: ISubject): number {
    return Number(item.id);
  }

  delete(subject: ISubject): void {
    const modalRef = this.modalService.open(ManageSubjectsDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.subject = subject;
  }
}
