import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'manage-answer',
  templateUrl: 'manage-answer.html',
})
export class ManageAnswerComponent {

  @Input('group') public answerForm: FormGroup;

  constructor() { ; }

}
