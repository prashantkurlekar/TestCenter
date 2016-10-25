import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
// import { SafeHttp } from '../safe-http/safe-http';

@Injectable()
export class TestService {
  constructor(private http: Http) { }

  public getTopTests(): Promise<any> {
    return this.http.get('http://localhost:5000/api/test/top')
      .toPromise().then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
