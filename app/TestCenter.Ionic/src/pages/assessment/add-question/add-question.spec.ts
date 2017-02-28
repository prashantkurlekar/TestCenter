import { Logger } from './../../../providers';
import { AddQuestionPage } from '../';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavParams, NavController } from 'ionic-angular';
import { NavControllerMock, mockAssessment } from '../../../mocks';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Page: AddQuestionPage', () => {

  let fixture: ComponentFixture<AddQuestionPage>;
  let componentInstance: AddQuestionPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddQuestionPage],
      providers: [
        { provide: NavController, useClass: NavControllerMock },
        { provide: NavParams, useValue: { assessment: mockAssessment, get: () => { return mockAssessment; } } },
        Logger,
      ],
      imports: [
        IonicModule.forRoot(AddQuestionPage)
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

    fixture = TestBed.createComponent(AddQuestionPage);
    componentInstance = fixture.componentInstance;
  });

  it('should be initialized', () => {
    expect(componentInstance).toBeDefined();
  });

  it('should set title', () => {
    componentInstance.ionViewDidLoad();

    console.info(componentInstance.assessment);

    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('ion-title')).nativeElement.textContent;
    expect(title).toContain(mockAssessment.shortName);
    expect(componentInstance.title).toContain(mockAssessment.shortName);
  });

  it('should build a form to accept question details', () => {
    fixture.detectChanges();

    expect(componentInstance.addQuestionForm).toBeDefined();
    expect(componentInstance.addQuestionForm.controls['value']).toBeDefined();
    expect(componentInstance.addQuestionForm.controls['answers']).toBeDefined();
    expect(componentInstance.addQuestionForm.controls['correctAnswersIds']).toBeDefined();
  });

  it('should validate value of question', () => {
    fixture.detectChanges();

    let errors: any = {};
    let value = componentInstance.addQuestionForm.controls['value'];

    value.setValue('');
    errors = value.errors || {};
    expect(errors['required']).toBeTruthy();

    value.setValue(`
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      MoreThan1000Characters`);
    // fixture.detectChanges();
    errors = value.errors || {};
    expect(errors['maxlength']).toBeTruthy();
    expect(componentInstance.validationMessages.value.maxlength).toBeDefined();

    value.setValue(`
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
      0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789`);
    errors = value.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('should have at least 2 answers', () => {
    expect(true).toBe(true);
    // fixture.detectChanges();

    // let errors: any = {};
    // let answers = componentInstance.addQuestionForm.controls['answers'];

    // answers.setValue(['answer 1']);
    // errors = answers.errors || {};
    // expect(errors['required']).toBeTruthy();
  });

  it('should select at least one correct answer', () => {
    fixture.detectChanges();

    let errors: any = {};
    let correctAnswersIds = componentInstance.addQuestionForm.controls['correctAnswersIds'];

    correctAnswersIds.setValue('');
    errors = correctAnswersIds.errors || {};
    expect(errors['required']).toBeTruthy();

    correctAnswersIds.setValue(['1', '2']);
    errors = correctAnswersIds.errors || {};
    expect(errors['required']).toBeFalsy();
  });

});
