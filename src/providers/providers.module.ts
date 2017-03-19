import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { UtilService, SafeHttp, NetworkService, Logger, StorageBackendProvider } from './';
import { BackendProvider } from './backend/backend';
import { Storage } from '@ionic/storage';

export function serverFactory(): any {
  return new StorageBackendProvider(new Storage({}));
}

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
    UtilService, SafeHttp, NetworkService, Logger,
    { provide: BackendProvider, useFactory: serverFactory },
  ],
})
export class ProvidersModule { }
