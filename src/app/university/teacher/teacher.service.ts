import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import {ITeacher} from './teacher.model';
import {getTemplateRanges} from 'tslint/lib/rules/noConsecutiveBlankLinesRule';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private static TEACHER_KEY = 'teacher';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getTeachers(): Observable<Array<ITeacher>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ITeacher>(TeacherService.TEACHER_KEY).valueChanges();
        }));
  }

  public getTeacherById(teacherId: string): Observable<ITeacher> {
    return this.af.collection<ITeacher>(TeacherService.TEACHER_KEY).doc(teacherId).valueChanges();
  }

  public async createTeacher(teacher: ITeacher): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    const getterTime = new Date();
    teacher.modifiedDate = getterTime.getTime();
    teacher.id = this.af.createId();
    return await this.af.collection(TeacherService.TEACHER_KEY).doc(teacher.id).set(teacher);
  }

  public async updateTeacher(teacher: ITeacher): Promise<void> {
    const getterTime = new Date();
    teacher.modifiedDate = getterTime.getTime();
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(TeacherService.TEACHER_KEY).doc(teacher.id).set(teacher);
  }

  public async deleteTeacher(teacherId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(TeacherService.TEACHER_KEY).doc(teacherId).delete();
  }
}
