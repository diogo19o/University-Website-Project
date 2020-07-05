import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { EducationModule } from './education/education.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UniversityModule } from './university/university.module';
import { ContactsComponent } from './contacts/contacts.component';

export let firebaseConfig = {
  apiKey: 'AIzaSyBUKqSthyquIHqvXoP0foU9UgM0Srf5-k4',
  authDomain: 'pw-project-v2-dsn-bb.firebaseapp.com',
  databaseURL: 'https://pw-project-v2-dsn-bb.firebaseio.com',
  projectId: 'pw-project-v2-dsn-bb',
  storageBucket: 'pw-project-v2-dsn-bb.appspot.com',
  messagingSenderId: '1059573046838',
  appId: '1:1059573046838:web:47a7190e5b1e7691144297'
};


@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProjectModule,
    EducationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    UniversityModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
