import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { TestService } from './test/test.service';

@NgModule({
  providers: [
    AuthenticationService, TestService,
  ],
})
export class ServicesModule { }
