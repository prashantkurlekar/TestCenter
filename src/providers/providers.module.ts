import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { Logger } from './logger/logger';
import { FirebaseBackend } from './firebase-backend/firebase-backend';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [
    Logger, FirebaseBackend,
  ],
})
export class ProvidersModule { }
