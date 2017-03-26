import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TestService, AuthenticationService } from './';

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
    TestService, AuthenticationService,
  ],
})
export class ServicesModule { }
