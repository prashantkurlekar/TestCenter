import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SamplePage } from './sample';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Page.Admin.Sample', () => {

  let component: SamplePage;
  let fixture: ComponentFixture<SamplePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initialize', () => {
    expect(component).toBeTruthy();
  });

});
