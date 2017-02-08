import { ManageAssessmentPage } from './../assessment/manage/manage';
import { ContactPage } from './../contact/contact';
import { AboutPage } from './../about/about';
import { HomePage } from './../home/home';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabsPage } from './tabs';

let fixture: ComponentFixture<TabsPage>;
let componentInstance: TabsPage;

describe('Page: TabsPage', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
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

  it('should have tab roots defined', () => {
    expect(componentInstance.tab1Root === HomePage).toBeTruthy();
    expect(componentInstance.tab2Root === AboutPage).toBeTruthy();
    expect(componentInstance.tab3Root === ContactPage).toBeTruthy();
    expect(componentInstance.tab4Root === ManageAssessmentPage).toBeTruthy();
  });

});
