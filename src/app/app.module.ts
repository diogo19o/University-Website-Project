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

export const firebaseConfig = {
  apiKey: 'AIzaSyASaeglxeG_R936sM9j1-MIgu7LXXPhnvI',
  authDomain: 'pw-project-dsn-bb.firebaseapp.com',
  databaseURL: 'https://pw-project-dsn-bb.firebaseio.com/',
  projectId: 'pw-project-dsn-bb',
  storageBucket: 'pw-project-dsn-bb.appspot.com',
  messagingSenderId: '91787838551',
  appId: '1:91787838551:web:f00c8d82976925e47c4f12',
  measurementId: 'G-6013DGJKFB'
};

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent
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
