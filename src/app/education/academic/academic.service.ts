import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { IAcademic } from './academic.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  private static ACADEMIC_KEY = 'academic';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getAcademics(): Observable<Array<IAcademic>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<IAcademic>(AcademicService.ACADEMIC_KEY).valueChanges();
        }));
  }

  public getAcademicById(academicId: string): Observable<IAcademic> {
    return this.af.collection<IAcademic>(AcademicService.ACADEMIC_KEY).doc(academicId).valueChanges();
  }

  public async createAcademic(academic: IAcademic): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    academic.id = this.af.createId();
    return await this.af.collection(AcademicService.ACADEMIC_KEY).doc(academic.id).set(academic);
  }

  public async updateAcademic(academic: IAcademic): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(AcademicService.ACADEMIC_KEY).doc(academic.id).set(academic);
  }

  public async deleteAcademic(academicId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(AcademicService.ACADEMIC_KEY).doc(academicId).delete();
  }
}
