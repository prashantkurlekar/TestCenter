import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Page2 } from './page2';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavParamsMock } from '../../../test-config/mocks-ionic';

describe('Page2', () => {
  let de: DebugElement;
  let comp: Page2;
  let fixture: ComponentFixture<Page2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page2],
      imports: [
        IonicModule.forRoot(Page2)
      ],
      providers: [
        NavController,
        { provide: Platform, useClass: PlatformMock },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: NavParams, useClass: NavParamsMock },
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  // it('should have expected <h3> text', () => {
  //   fixture.detectChanges();
  //   const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
  //   expect(h3.innerText).toMatch(/ionic/i,
  //     '<h3> should say something about "Ionic"');
  // });

});
