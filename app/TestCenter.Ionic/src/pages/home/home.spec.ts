/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { HomePage } from './home';
import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { NavController, Platform } from 'ionic-angular';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { AssessmentService } from '../../services';
import { SafeHttp } from '../../services';

describe('Page: HomePage', () => {

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NavController, useValue: mockNavController },
        MockBackend, BaseRequestOptions,
        {
          provide: SafeHttp, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        },
        AssessmentService,
      ],
    });
    TestBed.compileComponents();
    done();
  });

  it('should load component', async(() => {
    const fixture: any = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    let component: any = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));
});
