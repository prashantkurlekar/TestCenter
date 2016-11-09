/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionService } from './question.service';

describe('Service: Question', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService]
    });
  });

  it('should initialize', inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));

  // it('should add question', inject([QuestionService], (service: QuestionService) => {
  // }));
});
