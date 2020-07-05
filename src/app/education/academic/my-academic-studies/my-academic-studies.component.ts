import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {AcademicService} from '../academic.service';
import {IAcademic} from '../academic.model';

@Component({
  selector: 'app-my-academic-studies',
  templateUrl: './my-academic-studies.component.html',
  styleUrls: ['./my-academic-studies.component.scss']
})
export class MyAcademicStudiesComponent implements OnInit {
  academics: IAcademic[] | null = null;

  constructor(private academicService: AcademicService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.academicService.getAcademics().subscribe(data => {
      this.spinner.hide();
      this.academics = data;
    }, err => {
      this.spinner.hide();
    });
  }
}
