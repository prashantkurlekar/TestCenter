/* tslint:disable:no-unused-variable */

import { TestCenterApp } from './app.component';
import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockPlatform } from 'ionic-angular/util/mock-providers';
import { Platform } from 'ionic-angular';

describe('Pages: TestCenterApp', () => {

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [TestCenterApp],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useValue: (<any> new Platform) },
      ],
    });
    TestBed.compileComponents();
    done();
  });

  it('should load component', async(() => {
    const fixture: any = TestBed.createComponent(TestCenterApp);
    fixture.detectChanges();
    let component: any = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));
});
