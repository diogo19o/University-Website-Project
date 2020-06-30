import { Component, OnInit } from '@angular/core';
import {ICertification} from '../../certifications/certification.model';

@Component({
  selector: 'app-manage-academic-studies',
  templateUrl: './manage-academic-studies.component.html',
  styleUrls: ['./manage-academic-studies.component.scss']
})
export class ManageAcademicStudiesComponent implements OnInit {

  certifications?: ICertification[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
