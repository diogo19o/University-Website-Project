import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SubjectService} from '../../subject.service';
import {Subject} from '../../subject.model';

@Component({
  selector: 'app-manage-subjects-update',
  templateUrl: './manage-subjects-update.component.html',
  styleUrls: ['./manage-subjects-update.component.scss']
})
export class ManageSubjectsUpdateComponent implements OnInit {
  manageSubjectsForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private subjectService: SubjectService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ subject }) => {
      this.updateForm(subject);
    });
  }

  public isControlInvalid(formControlName: string): boolean {
    return this.manageSubjectsForm.get(formControlName).invalid
      && (this.manageSubjectsForm.get(formControlName).dirty || this.manageSubjectsForm.get(formControlName).touched);
  }

  public isControlInvalidAndHasError(formControlName: string, keyError: string): boolean {
    return this.isControlInvalid(formControlName) && this.manageSubjectsForm.get(formControlName).errors
      && this.manageSubjectsForm.get(formControlName).hasError(keyError);
  }2

  saveSubject(): void {
    this.isSaving = true;
    if (!this.manageSubjectsForm.get(['id']).value) {
      this.subjectService.createSubject(this.manageSubjectsForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Subject successfully added', 'Success');
          this.router.navigate(['/managesubjects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new subject', 'Error');
        });
    } else {
      this.subjectService.updateSubject(this.manageSubjectsForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Subject successfully updated', 'Success');
          this.router.navigate(['/managesubjects']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new Subject', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageSubjectsForm = new FormGroup({
      id: new FormControl(''),
      subjectName: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private updateForm(subject: Subject): void {
    this.manageSubjectsForm.patchValue({
      id: subject.id,
      subjectName: subject.subjectName,
      type: subject.type
    });
  }

}
