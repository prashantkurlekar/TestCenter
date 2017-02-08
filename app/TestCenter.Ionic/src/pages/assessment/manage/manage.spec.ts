import { Logger } from './../../../providers';
import { MockBackend } from '@angular/http/testing';
import { SafeHttp } from './../../../providers/safe-http';
import { AssessmentService } from './../../../services/assessment/assessment.service';
import { TestBed, ComponentFixture, async, fakeAsync } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';
import { IonicModule, NavParams, NavController, App } from 'ionic-angular';
import { ManageAssessmentPage } from './manage';
import { NavControllerMock, PlatformMock, mockAssessment } from '../../../mocks';
import { Storage } from '@ionic/storage';
import { AddQuestionPage } from '../';

let fixture: ComponentFixture<ManageAssessmentPage>;
let componentInstance: ManageAssessmentPage;

describe('Page: ManageAssessmentPage', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAssessmentPage],
      providers: [
        { provide: App, useValue: PlatformMock },
        { provide: NavController, useClass: NavControllerMock },
        { provide: NavParams, useValue: {} },
        MockBackend, BaseRequestOptions,
        {
          provide: SafeHttp, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        Storage,
        AssessmentService, Logger,
      ],
      imports: [
        IonicModule.forRoot(ManageAssessmentPage)
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(console, 'log').and.stub();
    spyOn(console, 'info').and.stub();
    spyOn(console, 'debug').and.stub();

    fixture = TestBed.createComponent(ManageAssessmentPage);
    componentInstance = fixture.componentInstance;
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
    expect(title).toContain('Assessment');
  });

  it('should create a FormGroup comprised of FormControls', () => {
    componentInstance.ngOnInit();
    expect(componentInstance.assessmentForm instanceof FormGroup).toBe(true);
  });

  it('should validate Name', () => {
    fixture.detectChanges();

    let errors: any = {};
    let name = componentInstance.assessmentForm.controls['name'];

    name.setValue('');
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();

    name.setValue('name of title');
    errors = name.errors || {};
    expect(errors['required']).toBeUndefined();
    expect(errors['maxlength']).toBeUndefined();

    name.setValue('012345678901234567890123456789012345678901234567891');
    errors = name.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('should validate Short name', () => {
    fixture.detectChanges();

    let errors: any = {};
    let shortName = componentInstance.assessmentForm.controls['shortName'];

    shortName.setValue('');
    errors = shortName.errors || {};
    expect(errors['required']).toBeTruthy();

    shortName.setValue('Short name');
    errors = shortName.errors || {};
    expect(errors['required']).toBeUndefined();

    shortName.setValue('012345678901');
    errors = shortName.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('should validate Description', () => {
    componentInstance.ngOnInit();

    let errors: any = {};
    let description = componentInstance.assessmentForm.controls['description'];

    description.setValue('');
    errors = description.errors || {};
    expect(errors['required']).toBeTruthy();

    description.setValue('Description');
    errors = description.errors || {};
    expect(errors['required']).toBeUndefined();
    expect(errors['maxlength']).toBeUndefined();

    description.setValue('01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
    errors = description.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('should create a Assessment and navigate to add questions page',
    fakeAsync(() => {
      componentInstance.ngOnInit();

      const assessment = {
        name: mockAssessment.name,
        shortName: mockAssessment.shortName,
        description: mockAssessment.description,
        categories: mockAssessment.categories,
      };
      componentInstance.assessmentForm.setValue(assessment);

      spyOn(componentInstance.assessmentService, 'createAssessment').and.returnValue(Promise.resolve(mockAssessment));
      spyOn(componentInstance.navController, 'push').and.stub();

      componentInstance.onSubmit();

      fixture.whenStable().then(() => {
        console.info(componentInstance.assessment);
        expect(componentInstance.assessment.id).toBeTruthy();
        expect(componentInstance.navController.push).toHaveBeenCalledWith(AddQuestionPage, { assessment: mockAssessment });
      });
    })
  );

  it('should handle server exceptions',
    fakeAsync(() => {
      // componentInstance.ngOnInit();

      // componentInstance.assessmentForm.setValue(mockAssessment);

      // const response = new Response(new ResponseOptions({ body: {}, status: 500 }));

      // spyOn(componentInstance.assessmentService, 'createAssessment').and.returnValue(Promise.reject(response));
      // spyOn(componentInstance.logger, 'handleError'); // .and.stub();

      // componentInstance.onSubmit();

      // fixture.whenStable().then(() => {
      //   // expect(componentInstance.assessmentService.createAssessment).toThrowError();
      //   expect(componentInstance.logger.handleError).toHaveBeenCalled();
      // });
    })
  );

});

// http://www.pornhub.com/view_video.php?viewkey=ph57704298dbc7d
// http://www.pornhub.com/view_video.php?viewkey=ph575722cc82663
// http://www.pornhub.com/view_video.php?viewkey=ph558c3d029aa15
// http://www.pornhub.com/view_video.php?viewkey=ph5716501e3ebc8
// http://www.pornhub.com/view_video.php?viewkey=ph559dfca8a9cd4
// 
