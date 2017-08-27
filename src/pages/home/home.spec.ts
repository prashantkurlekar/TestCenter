import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home';
import { IonicModule } from 'ionic-angular';
import { AssessmentService } from '../../services/assessment/assessment.service';
import { TestCenterData } from '../../providers/testcenter-data';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';

describe('Page.HomePage', () => {
  // let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage),
        TranslateModule.forRoot(),
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
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should define title for page', () => {
    const title = fixture.debugElement.query(By.css('ion-title')).nativeElement;

    expect(title).toBeDefined();
  });

  it('should get topics for selected organization', fakeAsync(() => {
    const assessmentService = fixture.debugElement.injector.get(AssessmentService);
    spyOn(assessmentService, 'getAssessments').and.returnValue([{ name: 'one' }, { name: 'two' }]);

    comp.ionViewDidLoad();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const topics = fixture.debugElement.query(By.css('ion-list')).queryAllNodes(By.css('ion-item'));
      expect(topics.length).toBeGreaterThan(0);
    });
  }));

});
