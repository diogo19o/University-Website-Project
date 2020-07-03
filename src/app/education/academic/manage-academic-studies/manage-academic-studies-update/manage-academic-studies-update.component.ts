import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Project} from '../../../../project/project.model';
import {AcademicService} from '../../academic.service';

@Component({
  selector: 'app-manage-academic-studies-update',
  templateUrl: './manage-academic-studies-update.component.html',
  styleUrls: ['./manage-academic-studies-update.component.scss']
})
export class ManageAcademicStudiesUpdateComponent implements OnInit {

  manageAcadStudForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private academicService: AcademicService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ academicStudies }) => {
      this.updateForm(academicStudies);
    });
  }

  saveProject(): void {
    this.isSaving = true;
    if (!this.manageAcadStudForm.get(['id']).value) {
      this.academicService.createAcademic(this.manageAcadStudForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Project successfully created', 'Success');
          this.router.navigate(['/manageacademicstudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new project', 'Error');
        });
    } else {
      this.academicService.createAcademic(this.manageAcadStudForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Project successfully updated', 'Success');
          this.router.navigate(['/manageacademicstudies']);
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
      (this.manageAcadStudForm.get(['projectTeamMembers']) as FormArray).push(this.createProjectTeamMemberFormGroup());
    }

    deleteProjectTeamMember(index: number): void {
      (this.manageAcadStudForm.get(['projectTeamMembers']) as FormArray).removeAt(index);
    }

    get projectTeamMembersControls(): Array<AbstractControl> {
      return (this.manageAcadStudForm.get('projectTeamMembers') as FormArray).controls;
    }
   */

  private createForm() {
    this.manageAcadStudForm = new FormGroup({
      id: new FormControl(''),
      certName: new FormControl('', [Validators.required]),
      issuingOrg: new FormControl('', [Validators.required]),
      issuingDate: new FormControl('', [Validators.required]),
      expires: new FormControl(false, [Validators.required]),
      expireDate: new FormControl('', [Validators.required]),
      certCode: new FormControl('', [Validators.required,  Validators.maxLength(30)]),
      certUrl: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  /*
  private createProjectTeamMemberFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      memberSpecialization: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      memberName: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('')
    });
  }

   */

  private updateForm(project: Project): void {
    this.manageAcadStudForm.patchValue({
      id: project.id,
      certName: project.projectName,
      issuingOrg: project.projectAlias,
      issuingDate: project.companyName,
      expires: project.companyAddress,
      expireDate: project.state,
      certCode: project.city,
      certUrl: project.zip
    });
    /*
    this.createProjectTeamMemberFormArray(project)
      .forEach(g => (this.manageAcadStudForm.get('projectTeamMembers') as FormArray).push(g));
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
