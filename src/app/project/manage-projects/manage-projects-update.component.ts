import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects-update.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsUpdateComponent implements OnInit {

  manageProjectsForm: FormGroup;
  isSaving: boolean;

  constructor(protected activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ project }) => {
      this.updateForm(project);
    });
  }

  saveProject(): void {
    console.table(this.manageProjectsForm.getRawValue());
    this.toastr.success('Data successfully saved', 'Success');
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageProjectsForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      projectAlias: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      companyName: new FormControl('', [Validators.required]),
      companyAddress: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required,  Validators.maxLength(8)]),
    });
  }

  private updateForm(project: Project): void {
    this.manageProjectsForm.patchValue({
      projectName: project.projectName,
      projectAlias: project.projectAlias,
      companyName: project.companyName,
      companyAddress: project.companyAddress,
      state: project.state,
      city: project.city,
      zip: project.zip
    });
  }
}
