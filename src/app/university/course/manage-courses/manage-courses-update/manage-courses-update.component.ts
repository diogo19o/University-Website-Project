import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Course, ICourse} from '../../course.model';
import {CourseService} from '../../course.service';
import {ITeacher, Teacher} from '../../../teacher/teacher.model';
import {TeacherService} from '../../../teacher/teacher.service';
import {SubjectService} from '../../../subject/subject.service';
import {ISubject, Subject} from '../../../subject/subject.model';


@Component({
  selector: 'app-manage-courses-update',
  templateUrl: './manage-courses-update.component.html',
  styleUrls: ['./manage-courses-update.component.scss']
})
export class ManageCoursesUpdateComponent implements OnInit {
  manageCoursesForm: FormGroup;
  public allTeachers: Array<ITeacher> = new Array<ITeacher>();
  public allCourses: Array<ICourse> = new Array<ICourse>();
  public allSubjects: Array<ISubject> = new Array<ISubject>();
  isSaving: boolean;

  constructor(
    protected activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private courseService: CourseService,
    private teacherService: TeacherService,
    private subjectService: SubjectService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
    this.teacherService.getTeachers().subscribe((teachers: Array<ITeacher>) => {
      this.allTeachers = teachers;
    });
    this.courseService.getCourses().subscribe((courses: Array<ITeacher>) => {
      this.allCourses = courses;
    });
    this.subjectService.getSubjects().subscribe((subject: Array<ITeacher>) => {
      this.allSubjects = subject;
    });
    this.activatedRoute.data.subscribe(({course}) => {
      this.updateForm(course);
    });
  }

  public isControlInvalid(formControlName: string): boolean {
    return this.manageCoursesForm.get(formControlName).invalid
      && (this.manageCoursesForm.get(formControlName).dirty || this.manageCoursesForm.get(formControlName).touched);
  }

  public isControlInvalidAndHasError(formControlName: string, keyError: string): boolean {
    return this.isControlInvalid(formControlName) && this.manageCoursesForm.get(formControlName).errors
      && this.manageCoursesForm.get(formControlName).hasError(keyError);
  }

  saveCourse(): void {
    this.isSaving = true;
    if (!this.manageCoursesForm.get(['id']).value) {
      this.courseService.createCourse(this.manageCoursesForm.getRawValue(), this.allCourses).then(data => {
          this.isSaving = false;
          this.toastr.success('New Course successfully added', 'Success');
          this.router.navigate(['/managecourses']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new course', 'Error');
        });
    } else {
      this.courseService.updateCourse(this.manageCoursesForm.getRawValue()).then(() => {
          this.isSaving = false;
          this.toastr.success('Course successfully updated', 'Success');
          this.router.navigate(['/managecourses']);
        },
        err => {
          this.isSaving = false;
          this.toastr.error('An error occurred while saving a new Course', 'Error');
        });
    }
  }

  previousState(): void {
    window.history.back();
  }

  private createForm() {
    this.manageCoursesForm = new FormGroup({
      id: new FormControl(''),
      courseName: new FormControl('', [Validators.required]),
      durationYear: new FormControl('', [Validators.required]),
      courseTeachers: this.formBuilder.array([]),
      courseSubjects: this.formBuilder.array([]),
      formRecaptcha: new FormControl(null, [Validators.required])
    });
  }

  private createCourseTeacherFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      teacherName: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      teacherSpecialization: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('')
    });
  }


  private createCourseSubjectFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      subjectName: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      type: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });
  }

  private updateForm(course: Course): void {
    this.manageCoursesForm.patchValue({
      id: course.id,
      courseName: course.courseName,
      durationYear: course.durationYear
    });
    this.createCourseTeacherFormArray(course)
      .forEach(g => (this.manageCoursesForm.get('courseTeachers') as FormArray).push(g));
    this.createCourseSubjectFormArray(course)
      .forEach(g => (this.manageCoursesForm.get('courseSubjects') as FormArray).push(g));
  }

  addCourseTeacher(): void {
    (this.manageCoursesForm.get(['courseTeachers']) as FormArray).push(this.createCourseTeacherFormGroup());
    // this.teacherService.createTeacher(this.createCourseTeacherFormGroup())
  }

  addCourseSubject(): void {
    (this.manageCoursesForm.get(['courseSubjects']) as FormArray).push(this.createCourseSubjectFormGroup());
    // this.teacherService.createTeacher(this.createCourseTeacherFormGroup())
  }

  deleteCourseTeacher(index: number): void {
    (this.manageCoursesForm.get(['courseTeachers']) as FormArray).removeAt(index);
  }

  deleteCourseSubject(index: number): void {
    (this.manageCoursesForm.get(['courseSubjects']) as FormArray).removeAt(index);
  }

  get courseTeachersControls(): Array<AbstractControl> {
    return (this.manageCoursesForm.get('courseTeachers') as FormArray).controls;
  }

  get courseSubjectsControls(): Array<AbstractControl> {
    // return new Array<AbstractControl>();
    return (this.manageCoursesForm.get('courseSubjects') as FormArray).controls;
  }

  private createCourseTeacherFormArray(course: Course): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!course.courseTeachers) {
      course.courseTeachers = [];
    }
    course.courseTeachers.forEach(courseTeacher => {
      fg.push(this.formBuilder.group({
          id: new FormControl(courseTeacher.id),
          teacherName: new FormControl(courseTeacher.teacherName),
          teacherSpecialization: new FormControl(courseTeacher.teacherSpecialization),
          startDate: new FormControl(courseTeacher.startDate),
          endDate: new FormControl(courseTeacher.endDate)
        })
      );
    });
    return fg;
  }

  private createCourseSubjectFormArray(course: Course): FormGroup[] {
    const fg: FormGroup[] = [];
    if (!course.courseSubjects) {
      course.courseSubjects = [];
    }
    course.courseSubjects.forEach(courseSubject => {
      fg.push(this.formBuilder.group({
          id: new FormControl(courseSubject.id),
          subjectsName: new FormControl(courseSubject.subjectName),
          type: new FormControl(courseSubject.type),
        })
      );
    });
    return fg;
  }

  fillFieldsTeacher(teacher: Teacher, index: number) {
    (this.manageCoursesForm.get(['courseTeachers']) as FormArray).at(index).setValue({
      id: teacher.id,
      teacherName: teacher.teacherName,
      teacherSpecialization: teacher.teacherSpecialization,
      startDate: teacher.startDate,
      endDate: teacher.endDate
    });
  }

  fillFieldsSubject(subject: Subject, index: number) {
    (this.manageCoursesForm.get(['courseSubjects']) as FormArray).at(index).setValue({
      id: subject.id,
      subjectName: subject.subjectName,
      type: subject.type,
    });
  }
}
