import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Teacher} from '../../teacher.model';
import {TeacherService} from '../../teacher.service';

@Component({
  selector: 'app-manage-teachers-update',
  templateUrl: './manage-teachers-update.component.html',
  styleUrls: ['./manage-teachers-update.component.scss']
})
export class ManageTeachersUpdateComponent implements OnInit {
  manageTeachersForm: FormGroup;
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private teacherService: TeacherService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.data.subscribe(({ teacher }) => {
      this.updateForm(teacher);
    });
  }

  public isControlInvalid(formControlName: string): boolean {
    return this.manageTeachersForm.get(formControlName).invalid
      && (this.manageTeachersForm.get(formControlName).dirty || this.manageTeachersForm.get(formControlName).touched);
  }

  public isControlInvalidAndHasError(formControlName: string, keyError: string): boolean {
    return this.isControlInvalid(formControlName) && this.manageTeachersForm.get(formControlName).errors
      && this.manageTeachersForm.get(formControlName).hasError(keyError);
  }

  public saveTeacher(): void {
    this.isSaving = true;
    if (!this.manageTeachersForm.get(['id']).value) {
      this.teacherService.createTeacher(this.manageTeachersForm.getRawValue()).then(data => {
          this.isSaving = false;
          this.toastr.success('New Teacher successfully added', 'Success');
          this.router.navigate(['/manageteachers']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new teacher', 'Error');
        });
    } else {
      this.teacherService.updateTeacher(this.manageTeachersForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Teacher successfully updated', 'Success');
          this.router.navigate(['/manageteachers']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new Teacher', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageTeachersForm = new FormGroup({
      id: new FormControl(''),
      teacherName: new FormControl('', [Validators.required]),
      teacherSpecialization: new FormControl('', [Validators.required]),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      formRecaptcha: new FormControl(null, [Validators.required]),
    });
  }

  private updateForm(teacher: Teacher): void {
    this.manageTeachersForm.patchValue({
      id: teacher.id,
      teacherName: teacher.teacherName,
      teacherSpecialization: teacher.teacherSpecialization,
      startDate: teacher.startDate,
      endDate: teacher.endDate
    });
  }

}
