import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Project} from '../../../../project/project.model';
import {AcademicService} from '../../academic.service';
import {Academic} from '../../academic.model';

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

  public isControlInvalid(formControlName: string): boolean {
    return this.manageAcadStudForm.get(formControlName).invalid
      && (this.manageAcadStudForm.get(formControlName).dirty || this.manageAcadStudForm.get(formControlName).touched);
  }

  public isControlInvalidAndHasError(formControlName: string, keyError: string): boolean {
    return this.isControlInvalid(formControlName) && this.manageAcadStudForm.get(formControlName).errors
      && this.manageAcadStudForm.get(formControlName).hasError(keyError);
  }

  saveProject(): void {
    this.isSaving = true;
    if (!this.manageAcadStudForm.get(['id']).value) {
      this.academicService.createAcademic(this.manageAcadStudForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Academic Studie successfully created', 'Success');
          this.router.navigate(['/manageacademicstudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new academic studie', 'Error');
        });
    } else {
      this.academicService.createAcademic(this.manageAcadStudForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Academic Studie successfully updated', 'Success');
          this.router.navigate(['/manageacademicstudies']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new academic studie', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageAcadStudForm = new FormGroup({
      id: new FormControl(''),
      formation: new FormControl('', [Validators.required]),
      educationalInstitution: new FormControl('', [Validators.required]),
      grade: new FormControl('', [Validators.required,Validators.min(0),Validators.max(20)]),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(academic: Academic): void {
    this.manageAcadStudForm.patchValue({
      id: academic.id,
      formation: academic.formation,
      educationalInstitution: academic.educationalInstitution,
      grade: academic.grade
    });
  }

}
