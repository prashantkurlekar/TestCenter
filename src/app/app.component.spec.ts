import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TestCenterApp } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('App.TestCenterApp', () => {

  let component: TestCenterApp;
  let fixture: ComponentFixture<TestCenterApp>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCenterApp],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [Platform, StatusBar, SplashScreen],
    }).compileComponents();

    fixture = TestBed.createComponent(TestCenterApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initialize', () => {
    expect(component).toBeTruthy();
  });

});
