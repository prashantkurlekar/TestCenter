import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { QuestionAddComponent } from './';
import { ProvidersModule } from '../providers/providers.module';

const components: any = [
  QuestionAddComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    IonicModule, ProvidersModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [...components],
  entryComponents: [],
  providers: [],
})
export class ComponentsModule { }
