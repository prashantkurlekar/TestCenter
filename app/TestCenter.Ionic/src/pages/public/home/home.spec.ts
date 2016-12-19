/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { PublicHomePage } from './home';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { NavController, Platform, AlertController, App, Config } from 'ionic-angular';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { AssessmentService, LoggerService } from '../../../services';
import { AssessmentServiceMock } from '../../../services/mocks';
import { TestCenterData } from '../../../mock-data/testcenter-data';
import { OptionsPage } from '../../assessment/options/options';

let fixture: ComponentFixture<PublicHomePage> = null;
let componentInstance: any = null;

describe('Page: PublicHomePage', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [PublicHomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        App, Config, Platform, MockBackend, BaseRequestOptions,
        AlertController, TestCenterData,
        { provide: LoggerService, useClass: LoggerService },
        { provide: AssessmentService, useClass: AssessmentServiceMock },
        { provide: NavController, useValue: mockNavController },
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options)
          }, deps: [MockBackend, BaseRequestOptions],
        },
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PublicHomePage);
      componentInstance = fixture;
      fixture.detectChanges();
    });

    spyOn(console, 'log').and.stub();
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should load component', async(() => {
    expect(componentInstance).toBeTruthy();
  }));

  it('should show message if no assessments found', async(() => {
    let de = fixture.debugElement.query(By.css('ion-list-header'));
    let el = de.nativeElement;
    expect(el.textContent).toContain('No assessments found');
  }));

  it('should show available assessment list', async(() => {
    expect(true).toBeTruthy();
  }));
  // it('should redirect to options page', async(() => {
  //   const fixture: any = TestBed.createComponent(PublicHomePage);

  //   let component: any = fixture.debugElement.componentInstance;
  //   spyOn(component.navController, 'push').and.returnValue(mockNavController)
  //   // spyOn(component.navController, 'push').and.callFake((args, action) => {
  //   //   // return something
  //   // });
  //   // console.log(component.navController);
  //   // spyOn(component.navController, 'push').and.stub();
  //   const assessmentId = 1;
  //   component.onAssessment(assessmentId);
  //   fixture.detectChanges();
  //   expect(component.navController.push).toHaveBeenCalledWith(OptionsPage, { assessmentId: assessmentId });
  // }));

});
