import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ProjectService} from '../../../../project/project.service';
import {Project} from '../../../../project/project.model';
import {CertificationService} from '../../certification.service';

@Component({
  selector: 'app-manage-certifications-update',
  templateUrl: './manage-certifications-update.component.html',
  styleUrls: ['./manage-certifications-update.component.scss']
})
export class ManageCertificationsUpdateComponent implements OnInit {

  manageCertificationsForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private certificationService: CertificationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ certification }) => {
      this.updateForm(certification);
    });
  }

  saveProject(): void {
    this.isSaving = true;
    if (!this.manageCertificationsForm.get(['id']).value) {
      this.certificationService.createCertification(this.manageCertificationsForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Project successfully created', 'Success');
          this.router.navigate(['/managecertifications']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.certificationService.updateCertification(this.manageCertificationsForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/managecertifications']);
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

/*
  addProjectTeamMember(): void {
    (this.manageCertificationsForm.get(['projectTeamMembers']) as FormArray).push(this.createProjectTeamMemberFormGroup());
  }

  deleteProjectTeamMember(index: number): void {
    (this.manageCertificationsForm.get(['projectTeamMembers']) as FormArray).removeAt(index);
  }

  get projectTeamMembersControls(): Array<AbstractControl> {
    return (this.manageCertificationsForm.get('projectTeamMembers') as FormArray).controls;
  }
 */

  private createForm() {
    this.manageCertificationsForm = new FormGroup({
      id: new FormControl(''),
      projectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      projectAlias: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      companyName: new FormControl('', [Validators.required]),
      companyAddress: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required,  Validators.maxLength(8)]),
      personnelProject: new FormControl(false, [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
      projectTeamMembers: this.formBuilder.array([]),
    });
  }

  private createProjectTeamMemberFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      memberSpecialization: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      memberName: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('')
    });
  }

  private updateForm(project: Project): void {
    this.manageCertificationsForm.patchValue({
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
    /*
    this.createProjectTeamMemberFormArray(project)
      .forEach(g => (this.manageCertificationsForm.get('projectTeamMembers') as FormArray).push(g));
     */
  }

  /*
  private createProjectTeamMemberFormArray(project: Project): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!project.projectTeamMembers) {
      project.projectTeamMembers = [];
    }
    project.projectTeamMembers.forEach(projectTeamMember => {
      fg.push(this.formBuilder.group({
          id: new FormControl(projectTeamMember.id),
          memberSpecialization: new FormControl(projectTeamMember.memberSpecialization, [Validators.required, Validators.maxLength(50)]),
          memberName: new FormControl(projectTeamMember.memberName, [Validators.required, Validators.maxLength(250)]),
          startDate: new FormControl(projectTeamMember.startDate, [Validators.required]),
          endDate: new FormControl(projectTeamMember.endDate)
        })
      );
    });
    return fg;
  }
   */

}
