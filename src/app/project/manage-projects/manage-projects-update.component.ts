import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject, Project } from '../project.model';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects-update.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsUpdateComponent implements OnInit {

  manageProjectsForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private projectService: ProjectService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ project }) => {
      this.updateForm(project);
    });
  }

  saveProject(): void {
    this.isSaving = true;
    if (!this.manageProjectsForm.get(['id']).value) {
      this.projectService.createProject(this.createProjectObject()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Project successfully created', 'Success');
          this.router.navigate(['/manageprojects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.projectService.updateProject(this.createProjectObject()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/manageprojects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createProjectObject(): IProject {
    const entity = {
      ...new Project(),
      id: this.manageProjectsForm.get(['id']).value,
      projectName: this.manageProjectsForm.get(['projectName']).value,
      projectAlias: this.manageProjectsForm.get(['projectAlias']).value,
      companyName: this.manageProjectsForm.get(['companyName']).value,
      companyAddress: this.manageProjectsForm.get(['companyAddress']).value,
      state: this.manageProjectsForm.get(['state']).value,
      city: this.manageProjectsForm.get(['city']).value,
      zip: this.manageProjectsForm.get(['zip']).value,
      personnelProject: this.manageProjectsForm.get(['personnelProject']).value,
    };
    return entity;
  }

  private createForm() {
    this.manageProjectsForm = new FormGroup({
      id: new FormControl(''),
      projectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      projectAlias: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      companyName: new FormControl('', [Validators.required]),
      companyAddress: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required,  Validators.maxLength(8)]),
      personnelProject: new FormControl(false, [Validators.required])
    });
  }

  private updateForm(project: Project): void {
    this.manageProjectsForm.patchValue({
      id: project.id,
      projectName: project.projectName,
      projectAlias: project.projectAlias,
      companyName: project.companyName,
      companyAddress: project.companyAddress,
      state: project.state,
      city: project.city,
      zip: project.zip,
      personnelProject: !project.personnelProject ? false : project.personnelProject
    });
  }
}
