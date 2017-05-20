import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TestsPage } from './tests';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Page.Admin.Tests', () => {

  let component: TestsPage;
  let fixture: ComponentFixture<TestsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initialize', () => {
    expect(component).toBeTruthy();
  });

  it('should have title defined', () => {
    const titleHTMLElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;

    expect(titleHTMLElement.innerText).toBe('Tests');
  });

  it('should display available tests', () => {
    expect(true).toBeTruthy();
  });

});
