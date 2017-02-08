import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IonicModule, NavParams, NavController, App } from 'ionic-angular';
import { AssessmentDetailPage } from './detail';
import { NavControllerMock, PlatformMock } from '../../../mocks';

let fixture: ComponentFixture<AssessmentDetailPage>;
let componentInstance: AssessmentDetailPage;

describe('Page: AssessmentDetailsPage', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentDetailPage],
      providers: [
        { provide: App, useValue: PlatformMock },
        { provide: NavController, useValue: NavControllerMock },
        { provide: NavParams, useValue: {} },
      ],
      imports: [
        IonicModule.forRoot(AssessmentDetailPage)
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentDetailPage);
    componentInstance = fixture.componentInstance;

    spyOn(console, 'log').and.stub();
    spyOn(console, 'info').and.stub();
  });

  afterEach(() => {
    fixture.destroy();
    componentInstance = null;
  });

  it('should be initialized', () => {
    expect(fixture).toBeTruthy();
    expect(componentInstance).toBeTruthy();
  });

  it('should set title', () => {
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('ion-title')).nativeElement.textContent;
    expect(title).toContain('Details');
  });

});
