import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LdF5f4UAAAAAI3K-qdcszcg5ZSEAi5JvK9RF1yk' } as RecaptchaSettings,
    },
  ],
})

export class SharedModule { }
