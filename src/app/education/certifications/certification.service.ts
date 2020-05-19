import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { ICertification } from './certification.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private static CERTIFICATION_KEY = 'certification';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getCertifications(): Observable<Array<ICertification>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<ICertification>(CertificationService.CERTIFICATION_KEY).valueChanges();
        }));
  }

  public getCertificationById(certificationId: string): Observable<ICertification> {
    return this.af.collection<ICertification>(CertificationService.CERTIFICATION_KEY).doc(certificationId).valueChanges();
  }

  public async createCertification(certification: ICertification): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    certification.id = this.af.createId();
    return await this.af.collection(CertificationService.CERTIFICATION_KEY).doc(certification.id).set(certification);
  }

  public async updateCertification(certification: ICertification): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(CertificationService.CERTIFICATION_KEY).doc(certification.id).set(certification);
  }

  public async deleteCertification(certificationId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(CertificationService.CERTIFICATION_KEY).doc(certificationId).delete();
  }
}
