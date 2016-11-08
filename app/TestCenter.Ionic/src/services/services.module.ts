import { NgModule } from '@angular/core';
import { SafeHttp, NetworkService, AssessmentService, LoggerService, StorageService } from './';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  entryComponents: [],
  providers: [
    SafeHttp, NetworkService, AssessmentService, LoggerService, StorageService,
  ],
})
export class ServicesModule { }
