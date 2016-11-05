import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { AssessmentListItemComponent } from './assessment-list-item/assessment-list-item.component';

@NgModule({
  declarations: [
    AssessmentListItemComponent,
  ],
  imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    AssessmentListItemComponent,
  ],
  entryComponents: [],
  providers: [],
})
export class ComponentsModule { }
