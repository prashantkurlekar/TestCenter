import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../../models';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class CourseService {

  constructor(private http: Http, private loggerService: LoggerService) { }

  public createCourse(course: Course): any {
    return this.http.post(``, course).toPromise()
      .then(response => {
        return <Course>response.json();
      })
      .catch(error => {
        this.loggerService.error(error);
      });
  }

  public getTopCourses(): any {
    return this.http.get(``).toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        this.loggerService.error(error);
      });
  }
}
