import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ITeacher} from '../../teacher.model';

@Component({
  selector: 'app-manage-teachers-details',
  templateUrl: './manage-teachers-details.component.html',
  styleUrls: ['./manage-teachers-details.component.scss']
})
export class ManageTeachersDetailsComponent implements OnInit {
  teacher: ITeacher | null = null;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ teacher }) => {
      this.teacher = teacher;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
