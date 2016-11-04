import { Injectable } from '@angular/core';
import 'rxjs';
import { SafeHttp } from '../safe-http/safe-http';

@Injectable()
export class AssessmentService {
  constructor(private http: SafeHttp) { }

  public getTopTests(): Promise<any> {
    return this.http.get('http://localhost:5000/api/values')
      .toPromise().then(response => {
        return response.json();
      })
      .catch(error => {
        // console.log(`Error`);
        // console.error(error);
      });
  }
}
