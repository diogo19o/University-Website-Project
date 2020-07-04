import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {switchMap, takeUntil} from 'rxjs/operators';
import * as firebase from 'firebase';
import {ICourse} from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private static COURSE_KEY = 'course';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
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

  public async createCourse(course: ICourse): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    course.id = this.af.createId();
    course.courseTeachers.forEach(ptm => ptm.id = this.af.createId());
    return await this.af.collection(CourseService.COURSE_KEY).doc(course.id).set(course);
  }

  public async updateCourse(course: ICourse): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    course.courseTeachers.filter(ptm => !ptm.id).forEach(ptmFiltered => ptmFiltered.id = this.af.createId());
    return await this.af.collection(CourseService.COURSE_KEY).doc(course.id).set(course);
  }

  public async deleteCourse(courseId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(CourseService.COURSE_KEY).doc(courseId).delete();
  }
}