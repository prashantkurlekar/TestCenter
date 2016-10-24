/* tslint:disable:no-unused-variable */

import { TabsPage } from './tabs';
import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController, mockPlatform } from 'ionic-angular/util/mock-providers';
import { NavController, Platform } from 'ionic-angular';

describe('Pages: TabsPage', () => {

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    TestBed.compileComponents();
    done();
  });

  it('should load component', async(() => {
    const fixture: any = TestBed.createComponent(TabsPage);
    fixture.detectChanges();
    let component: any = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));
});
