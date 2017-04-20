import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { TestService } from './test/test.service';
import { CategoryService } from './category/category.service';
import { QuestionService } from './question/question.service';

@NgModule({
  providers: [
    AuthenticationService, TestService, CategoryService, QuestionService,
  ],
})
export class ServicesModule { }
