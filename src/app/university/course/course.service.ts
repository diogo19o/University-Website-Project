import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, switchMap, takeUntil} from 'rxjs/operators';
import * as firebase from 'firebase';
import {Course, ICourse} from './course.model';
import {ITeacher} from '../teacher/teacher.model';
import {TeacherService} from '../teacher/teacher.service';
import {ManageCoursesComponent} from './manage-courses/manage-courses.component';
import {isBoolean} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private static COURSE_KEY = 'course';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth, public teacherService: TeacherService) {
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

  public async createCourse(course: ICourse, courses: ICourse[]): Promise<void> {
    const getterTime = new Date();
    course.modifiedDate = getterTime.getTime();
    const currentUser = firebase.auth().currentUser;
    course.id = this.af.createId();
    this.teacherResolver(course);
    return await this.af.collection(CourseService.COURSE_KEY).doc(course.id).set(course);
  }

  public async updateCourse(course: ICourse): Promise<void> {
    const getterTime = new Date();
    course.modifiedDate = getterTime.getTime();
    const currentUser = firebase.auth().currentUser;
    course.courseTeachers.filter(teacher => !teacher.id).forEach(teacherFiltered => teacherFiltered.id = this.af.createId());
    this.teacherResolver(course);
    return await this.af.collection(CourseService.COURSE_KEY).doc(course.id).set(course);
  }

  public async deleteCourse(courseId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(CourseService.COURSE_KEY).doc(courseId).delete();
  }

  public async teacherResolver(course: ICourse) {
    for (const teacher of course.courseTeachers) {
      if (!teacher.id) {
        teacher.id = this.af.createId();
        await this.teacherService.createTeacher(teacher);
      } else {
        await this.teacherService.updateTeacher(teacher);
        await this.syncCourses(teacher);
      }
    }
  }

  public syncCourses(teacherNew: ITeacher) {
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
                modifiedArray.push(teacher);
              }
          });
          if (update) {
            this.af.collection(CourseService.COURSE_KEY).doc(course.id).update({
              courseTeachers: modifiedArray
            });
          }
          modifiedArray = new Array<ITeacher>();
        })
      );
    return new Promise(resolve => setTimeout(resolve, 300));
  }
}
