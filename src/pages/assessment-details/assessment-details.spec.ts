import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AssessmentDetailsPage } from './assessment-details';
import { IonicModule, NavController } from 'ionic-angular';
import { AssessmentService } from '../../services/assessment/assessment.service';
import { TestCenterData } from '../../providers/testcenter-data';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';

fdescribe('Page.AssessmentDetailsPage', () => {
  let component: AssessmentDetailsPage;
  let fixture: ComponentFixture<AssessmentDetailsPage>;

  beforeAll(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentDetailsPage],
      imports: [
        IonicModule.forRoot(AssessmentDetailsPage),
        TranslateModule.forRoot(),
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      providers: [
        MockBackend, BaseRequestOptions,
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        },
        TestCenterData, AssessmentService,
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentDetailsPage);
    component = fixture.componentInstance;
  });

  it('should create component', () => expect(component).toBeDefined());

  it('should define title for page', () => {
    const title = fixture.debugElement.query(By.css('ion-title')).nativeElement;

    expect(title).toBeDefined();
  });

});
