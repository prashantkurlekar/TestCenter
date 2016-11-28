/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { PublicHomePage } from './home';
import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { NavController, Platform, AlertController, App, Config } from 'ionic-angular';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { AssessmentService, LoggerService } from '../../../services';

describe('Page: PublicHomePage', () => {

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [PublicHomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        App, Config, Platform, MockBackend, BaseRequestOptions, AssessmentService, LoggerService, AlertController,
        { provide: NavController, useValue: mockNavController },
        { 
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options)
          }, deps: [MockBackend, BaseRequestOptions], 
        },
      ],
    });
    TestBed.compileComponents();
    done();
  });

  it('should load component', async(() => {
    const fixture: any = TestBed.createComponent(PublicHomePage);
    fixture.detectChanges();
    let component: any = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));

});
