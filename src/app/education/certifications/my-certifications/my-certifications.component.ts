import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ICertification} from '../certification.model';
import {CertificationService} from '../certification.service';

@Component({
  selector: 'app-my-certifications',
  templateUrl: './my-certifications.component.html',
  styleUrls: ['./my-certifications.component.scss']
})
export class MyCertificationsComponent implements OnInit {
  certifications: ICertification[] | null = null;

  constructor(private certificationService: CertificationService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.certificationService.getCertifications().subscribe(data => {
      this.spinner.hide();
      this.certifications = data;
    }, err => {
      this.spinner.hide();
    });
  }
}
