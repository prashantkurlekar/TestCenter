/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { AboutPage } from './about';
import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { NavController, Platform } from 'ionic-angular';

describe('Page: AboutPage', () => {

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NavController, useValue: mockNavController },
      ],
    });
    TestBed.compileComponents();
    done();
  });

  it('should load component', async(() => {
    const fixture: any = TestBed.createComponent(AboutPage);
    fixture.detectChanges();
    let component: any = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));
});
