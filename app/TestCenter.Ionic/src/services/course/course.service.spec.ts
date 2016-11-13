/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';

import { CourseService } from './course.service';
import { Course } from '../../models';

describe('Service: Course', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService, MockBackend, BaseRequestOptions,
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        }
      ]
    });
  });

  it('should initialize', inject([CourseService], (courseService: CourseService) => {
    expect(courseService).toBeTruthy();
  }));

  it('should create a course', async(inject([CourseService, MockBackend],
    (courseService: CourseService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        const response = new ResponseOptions({
          body: {
            id: 'newId',
            name: 'dummyCourse',
            description: 'this is a dummy course for unit testing',
            categories: ['dummy1', 'dummy2']
          }
        });
        connection.mockRespond(new Response(response));
      });

      const mockCourse: Course = {
        id: '',
        name: 'dummyCourse',
        description: 'this is a dummy course for unit testing',
        categories: ['dummy1', 'dummy2']
      };

      courseService.createCourse(mockCourse).then(newCourse => {
        expect(newCourse.id).toBeTruthy();
      });
    }
  )));

  it('should return top courses', async(inject([CourseService, MockBackend],
    (courseService: CourseService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        const response = new ResponseOptions({
          body: [
            { id: 1 }, { id: 2 }, { id: 3 }
          ]
        });
        connection.mockRespond(new Response(response));
      });

      courseService.getTopCourses().then(topCourses => {
        expect(topCourses.length).toBeGreaterThan(0);
      });
    }
  )));

});
