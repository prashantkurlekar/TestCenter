/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AssessmentListItemComponent } from './assessment-list-item.component';

describe('Component: AssessmentListItem', () => {
  let component: AssessmentListItemComponent;
  let fixture: ComponentFixture<AssessmentListItemComponent>;
  const mockAssessment = { id: 'something', name: 'mock', description: 'mock description' };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AssessmentListItemComponent ],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentListItemComponent);
    component = fixture.componentInstance;
    component.assessment = mockAssessment;
    fixture.detectChanges();
  });

  it('should initialize component', () => {
    expect(component).toBeTruthy();
  });
});
