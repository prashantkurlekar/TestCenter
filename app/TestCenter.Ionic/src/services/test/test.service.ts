import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class TestService {
  constructor(private http: Http) { }

  public getTop(): void {
    this.http.get('').toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
  }
}
