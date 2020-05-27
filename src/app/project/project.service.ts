import { Injectable } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { IProject } from './project.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private static PROJECT_KEY = 'project';

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public af: AngularFirestore, public db: AngularFireDatabase, public angularAuth: AngularFireAuth) {
  }

  public getProjects(): Observable<Array<IProject>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<IProject>(ProjectService.PROJECT_KEY).valueChanges();
        }));
  }

  public getProjectsByType(personnelProject: boolean): Observable<Array<IProject>> {
    return this.angularAuth.user
      .pipe(takeUntil(this.unsubscribe),
        switchMap(user => {
          return this.af.collection<IProject>(ProjectService.PROJECT_KEY,
              ref => ref.where('personnelProject', '==', personnelProject)).valueChanges();
        }));
  }

  public getProjectById(projectId: string): Observable<IProject> {
    return this.af.collection<IProject>(ProjectService.PROJECT_KEY).doc(projectId).valueChanges();
  }

  public async createProject(project: IProject): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    project.id = this.af.createId();
    project.projectTeamMembers.forEach(ptm => ptm.id = this.af.createId());
    return await this.af.collection(ProjectService.PROJECT_KEY).doc(project.id).set(project);
  }

  public async updateProject(project: IProject): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    project.projectTeamMembers.filter(ptm => !ptm.id).forEach(ptmFiltered => ptmFiltered.id = this.af.createId());
    return await this.af.collection(ProjectService.PROJECT_KEY).doc(project.id).set(project);
  }

  public async deleteProject(projectId: string): Promise<void> {
    const currentUser = firebase.auth().currentUser;
    return await this.af.collection(ProjectService.PROJECT_KEY).doc(projectId).delete();
  }
}
