import './polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, Platform, AlertController, GestureController } from 'ionic-angular';
import { async, TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { TestCenterData } from './mock-data/testcenter-data';
import { AssessmentService, LoggerService } from './services';
import { AssessmentServiceMock } from './services/mocks';
// import { ConfigMock } from './mocks';
// import { ClickersServiceMock } from './services/clickers.mock';
// import { ClickersService } from './services';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function (): void {
  // noop
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
// Then we find all the tests.
let context: any = require.context('./', true, /\.spec\.ts/);
// And load the modules.
context.keys().map(context);
// Finally, start Karma to run the tests.
__karma__.start();

export class TestUtils {

  public static beforeEachCompiler(components: Array<any>, otherProviders?: Array<any>): Promise<{ fixture: any, instance: any }> {
    spyOn(console, 'log').and.stub();
    spyOn(console, 'debug').and.stub();

    return TestUtils.configureIonicTestingModule(components, otherProviders)
      .compileComponents().then(() => {
        console.log('TestUtils.beforeEachCompiler');
        let fixture: any = TestBed.createComponent(components[0]);
        return {
          fixture: fixture,
          instance: fixture.debugElement.componentInstance,
        };
      });
  }

  public static configureIonicTestingModule(components: Array<any>, otherProviders?: Array<any>): typeof TestBed {
    return TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        ...components,
      ],
      providers: [
        App, Config, Platform, Form, Keyboard,
        DomController, MenuController, NavController, GestureController, AlertController,
        MockBackend, BaseRequestOptions,
        TestCenterData,
        { provide: LoggerService, useClass: LoggerService },
        { provide: AssessmentService, useClass: AssessmentServiceMock },
        { provide: NavController, useValue: mockNavController },
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options)
          }, deps: [MockBackend, BaseRequestOptions],
        },
        ...otherProviders,
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    });
  }

  // http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
  public static eventFire(el: any, etype: string): void {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      let evObj: any = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
}
