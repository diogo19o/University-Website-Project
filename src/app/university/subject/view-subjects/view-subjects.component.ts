import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ISubject} from '../subject.model';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.scss']
})
export class ViewSubjectsComponent implements OnInit {
  subjects: ISubject[] | null = null;

  constructor(private subjectService: SubjectService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.subjectService.getSubjects().subscribe(data => {
      this.spinner.hide();
      this.subjects = data;
    }, err => {
      this.spinner.hide();
    });
  }
}
