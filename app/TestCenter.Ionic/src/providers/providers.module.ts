import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { FirebaseBackendService } from './';

@NgModule({
  imports: [IonicModule],
  providers: [
    FirebaseBackendService
  ],
})
export class ProvidersModule { }
