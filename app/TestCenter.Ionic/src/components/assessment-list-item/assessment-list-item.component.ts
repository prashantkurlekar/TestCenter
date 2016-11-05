import { Component, Input } from '@angular/core';

@Component({
  selector: 'assessment-list-item',
  templateUrl: 'assessment-list-item.component.html',
})
export class AssessmentListItemComponent {

  @Input() public assessment?: any;

  constructor() { ; }
}
