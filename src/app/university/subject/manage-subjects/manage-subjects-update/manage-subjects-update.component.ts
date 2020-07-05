import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SubjectService} from '../../subject.service';
import {Subject} from '../../subject.model';
import {ITeacher, Teacher} from '../../../teacher/teacher.model';
import {Course, ICourse} from '../../../course/course.model';
import {CourseService} from '../../../course/course.service';

@Component({
  selector: 'app-manage-subjects-update',
  templateUrl: './manage-subjects-update.component.html',
  styleUrls: ['./manage-subjects-update.component.scss']
})
export class ManageSubjectsUpdateComponent implements OnInit {

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private subjectService: SubjectService,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  get subjectCoursesControls(): Array<AbstractControl> {
    return (this.manageSubjectsForm.get('subjectCourses') as FormArray).controls;
  }
  public allCourses: Array<ICourse> = new Array<ICourse>();
  manageSubjectsForm: FormGroup;
  isSaving: boolean;

  2;

  ngOnInit(): void {
    this.createForm();
    this.courseService.getCourses().subscribe((courses: Array<ITeacher>) => {
      this.allCourses = courses;
    });
    this.activatedRoute.data.subscribe(({subject}) => {
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
  }

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
      subjectCourses: this.formBuilder.array([]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private updateForm(subject: Subject): void {
    this.manageSubjectsForm.patchValue({
      id: subject.id,
      subjectName: subject.subjectName,
      type: subject.type
    });
    this.createSubjectCourseFormArray(subject)
      .forEach(g => (this.manageSubjectsForm.get('subjectCourses') as FormArray).push(g));
  }

  private createSubjectCourseFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      courseName: new FormControl('', Validators.required),
      durationYear: new FormControl('', Validators.required),
    });
  }

  addSubjectCourse(): void {
    (this.manageSubjectsForm.get(['subjectCourses']) as FormArray).push(this.createSubjectCourseFormGroup());
  }

  deleteSubjectCourse(index: number): void {
    (this.manageSubjectsForm.get(['subjectCourses']) as FormArray).removeAt(index);
  }

  private createSubjectCourseFormArray(subject: Subject): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!subject.subjectCourses) {
      subject.subjectCourses = [];
    }
    subject.subjectCourses.forEach(subjectCourse => {
      fg.push(this.formBuilder.group({
          id: new FormControl(subjectCourse.id),
          courseName: new FormControl(subjectCourse.courseName),
          // teacherSpecialization: new FormControl(subjectCourse.type),
          durationYear: new FormControl(subjectCourse.durationYear)
        })
      );
    });
    return fg;
  }

  fillFieldsCourse(course: Course, index: number) {
    (this.manageSubjectsForm.get(['subjectCourses']) as FormArray).at(index).setValue({
      id: course.id,
      courseName: course.courseName,
      durationYear: course.durationYear,
    });
  }

}
