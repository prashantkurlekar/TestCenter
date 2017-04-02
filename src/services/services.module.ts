import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { IonicModule } from 'ionic-angular';
import { AuthenticationService } from './';

@NgModule({
  declarations: [],
  imports: [
    // FormsModule,
    // IonicModule,
    // ReactiveFormsModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [
    AuthenticationService,
  ],
})
export class ServicesModule { }
