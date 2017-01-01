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
import { Assessment } from '../../../models';
import { TestUtils } from '../../../test';

let fixture: ComponentFixture<OptionsPage> = null;
let componentInstance: any = null;
let mockAssessment: Assessment = { "id": "1", "name": "Car", "shortName": "Car", "description": "Car description 1", "labels": ["Car", "label 1-1", "label 1-2"] };

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
        { provide: NavParams, useValue: new NavParams({ assessment: mockAssessment }) },
        { provide: LoggerService, useClass: LoggerService },
        { provide: NavController, useValue: mockNavController },
        // {
        //   provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
        //     return new Http(mockBackend, options)
        //   }, deps: [MockBackend, BaseRequestOptions],
        // },
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(OptionsPage);
      componentInstance = fixture.componentInstance;
      fixture.detectChanges();
    });

    spyOn(console, 'log').and.stub();
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should load component', async(() => {
    expect(fixture).toBeTruthy();
    expect(componentInstance).toBeTruthy();
  }));

  it('should extract assessment from NavParams', async(() => {
    componentInstance.ionViewDidEnter();
    const assessment = componentInstance.assessment;
    expect(assessment).toBeTruthy();
  }));

});
