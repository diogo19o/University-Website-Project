import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISubject} from '../../subject.model';

@Component({
  selector: 'app-manage-subjects-details',
  templateUrl: './manage-subjects-details.component.html',
  styleUrls: ['./manage-subjects-details.component.scss']
})
export class ManageSubjectsDetailsComponent implements OnInit {
  subject: ISubject | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ subject }) => {
      this.subject = subject;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
