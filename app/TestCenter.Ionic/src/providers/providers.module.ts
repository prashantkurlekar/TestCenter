import { SafeHttp, NetworkService } from './safe-http';
import { Logger } from './logger';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule,
  ],
  providers: [
    Logger, SafeHttp, NetworkService
  ],
})
export class ProviderModules { }
