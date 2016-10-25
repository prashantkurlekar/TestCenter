import { Injectable } from '@angular/core';
import 'rxjs';
import { SafeHttp } from '../safe-http/safe-http';

@Injectable()
export class TestService {
  constructor(private http: SafeHttp) { }

  public getTop(): void {
    this.http.get('')
      .toPromise().then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
