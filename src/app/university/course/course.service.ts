import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, switchMap, takeUntil} from 'rxjs/operators';
import * as firebase from 'firebase';
import {Course, ICourse} from './course.model';
import {TeacherService} from '../teacher/teacher.service';
import {SubjectService} from '../subject/subject.service';
import {ITeacher} from '../teacher/teacher.model';
import {ISubject} from '../subject/subject.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public static COURSE_KEY = 'course';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore,
              public db: AngularFireDatabase,
              public angularAuth: AngularFireAuth,
              public teacherService: TeacherService,
              public subjectService: SubjectService) {
  }

  public getCourses(): Observable<Array<ICourse>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ICourse>(CourseService.COURSE_KEY).valueChanges();
        }));
  }

  public getCourseById(courseId: string): Observable<ICourse> {
    return this.af.collection<ICourse>(CourseService.COURSE_KEY).doc(courseId).valueChanges();
  }

  public async teacherResolver(course: ICourse) {
    for (const teacher of course.courseTeachers) {
      if (!teacher.id) {
        teacher.id = this.af.createId();
        await this.teacherService.createTeacher(teacher);
      } else {
        await this.teacherService.updateTeacher(teacher);
        await this.syncTeachersInCourses(teacher);
      }
    }
  }


  public async subjectResolver(course: ICourse) {
    for (const subject of course.courseSubjects) {
      if (!subject.id) {
        subject.id = this.af.createId();
        await this.subjectService.createSubject(subject);
      } else {
        await this.subjectService.updateSubject(subject);
        await this.syncSubjectsInCourses(subject);
      }
    }
  }

  public async createCourse(course: ICourse): Promise<void> {
    let getterTime = new Date();
    course.modifiedDate = getterTime.getTime();
    const currentUser = firebase.auth().currentUser;
    course.id = this.af.createId();
    await this.teacherResolver(course);
    await this.subjectResolver(course);
    return await this.af.collection(CourseService.COURSE_KEY).doc(course.id).set(course);
  }

  public async updateCourse(course: ICourse): Promise<void> {
    let getterTime = new Date();
    course.modifiedDate = getterTime.getTime();
    const currentUser = firebase.auth().currentUser;
    await this.teacherResolver(course);
    await this.subjectResolver(course);
    return await this.af.collection(CourseService.COURSE_KEY).doc(course.id).set(course);
  }

  public async updateCourseThroughSubject(course: ICourse): Promise<void> {
    let getterTime = new Date();
    course.modifiedDate = getterTime.getTime();
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(CourseService.COURSE_KEY).doc(course.id).set(course);
  }

  public async deleteCourse(courseId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(CourseService.COURSE_KEY).doc(courseId).delete();
  }

  public syncTeachersInCourses(teacherNew: ITeacher) {
    let modifiedArray: Array<ITeacher> = new Array<ITeacher>();
    let update = false;
    this.af.collection<ICourse>(CourseService.COURSE_KEY).valueChanges()
      .subscribe(courses =>
        courses.forEach(course => {
          course.courseTeachers.forEach(teacher => {
            if (teacher.id == teacherNew.id) {
              modifiedArray.push(teacherNew);
              update = true;
            }else{
              modifiedArray.push(teacher)
            }
          })
          if (update) {
            this.af.collection(CourseService.COURSE_KEY).doc(course.id).update({
              courseTeachers: modifiedArray
            });
          }
          modifiedArray = new Array<ITeacher>()
        })
      );
    return new Promise(resolve => setTimeout(resolve, 300));
  }

  public syncSubjectsInCourses(subjectNew: ISubject) {
    let modifiedArray: Array<ITeacher> = new Array<ITeacher>();
    let update = false;
    this.af.collection<ICourse>(CourseService.COURSE_KEY).valueChanges()
      .subscribe(courses =>
        courses.forEach(course => {
          course.courseSubjects.forEach(subject => {
            if (subject.id == subjectNew.id) {
              modifiedArray.push(subjectNew);
              update = true;
            }else{
              modifiedArray.push(subject)
            }
          })
          if (update) {
            this.af.collection(CourseService.COURSE_KEY).doc(course.id).update({
              courseSubjects: modifiedArray
            });
          }
          modifiedArray = new Array<ITeacher>()
        })
      );
    return new Promise(resolve => setTimeout(resolve, 300));
  }

  public syncCoursesInSubjects(courseNew: ICourse) {
    let modifiedArray: Array<ICourse> = new Array<ICourse>();
    let update = false;
    this.af.collection<ISubject>(SubjectService.SUBJECT_KEY).valueChanges()
      .subscribe(subjects =>
        subjects.forEach(subject => {
          subject.subjectCourses.forEach(course => {
            if (course.id == courseNew.id) {
              modifiedArray.push(courseNew);
              update = true;
            }else{
              modifiedArray.push(course);
            }
          })
          if (update) {
            this.af.collection(SubjectService.SUBJECT_KEY).doc(subject.id).update({
              subjectCourses: modifiedArray
            });
          }
          modifiedArray = new Array<ICourse>()
        })
      );
    return new Promise(resolve => setTimeout(resolve, 300));
  }

}
