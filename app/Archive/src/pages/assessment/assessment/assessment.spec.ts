/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { AssessmentPage } from './assessment';
import { async, fakeAsync, TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { NavController, Platform, AlertController, App, Config } from 'ionic-angular';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { LoggerService } from '../../../services';

let fixture: ComponentFixture<AssessmentPage> = null;
let componentInstance: any = null;

describe('Page: AssessmentPage', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AssessmentPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        App, Config, Platform, FormBuilder,
        // MockBackend, BaseRequestOptions,
        AlertController,
        // TestCenterData,
        // { provide: LoggerService, useClass: LoggerService },
        // { provide: AssessmentService, useClass: AssessmentServiceMock },
        { provide: NavController, useValue: mockNavController },
        // {
        //   provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
        //     return new Http(mockBackend, options)
        //   }, deps: [MockBackend, BaseRequestOptions],
        // },
        LoggerService,
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AssessmentPage);
      componentInstance = fixture.componentInstance;
      fixture.detectChanges();
    });

    spyOn(console, 'log').and.stub();
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should load component',
    async(() => {
      expect(componentInstance).toBeTruthy();
      expect(componentInstance.title).toBeTruthy();
    })
  );

});
