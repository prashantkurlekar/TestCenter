/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { OptionsPage } from './options';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { NavController, Platform, AlertController, App, Config, NavParams } from 'ionic-angular';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { AssessmentService, LoggerService } from '../../../services';
import { AssessmentServiceMock } from '../../../services/mocks';
import { TestCenterData } from '../../../mock-data/testcenter-data';

let fixture: ComponentFixture<OptionsPage> = null;
let componentInstance: any = null;

describe('Page: OptionsPage', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        App, Config, Platform, AlertController,
        // MockBackend, BaseRequestOptions,
        // TestCenterData,
        // { provide: AssessmentService, useClass: AssessmentServiceMock },
        { provide: NavParams, useValue: {} },
        { provide: LoggerService, useClass: LoggerService },
        { provide: NavController, useValue: mockNavController },
        // {
        //   provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
        //     return new Http(mockBackend, options)
        //   }, deps: [MockBackend, BaseRequestOptions],
        // },
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(OptionsPage);
      componentInstance = fixture;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should load component', async(() => {
    expect(componentInstance).toBeTruthy();
  }));

});
