import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services';

@Component({
  selector: 'app-question-add',
  templateUrl: 'question-add.component.html',
})
export class QuestionAddComponent implements OnInit {

  constructor(public categoryService: CategoryService) { ; }

  public ngOnInit(): void { ; }

}
