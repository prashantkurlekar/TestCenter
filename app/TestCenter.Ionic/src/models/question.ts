import { Answer } from './answer';

export class Question {
  public value: string;
  public answers: Array<Answer>;
  public correctAnswersIds: Array<string>;
}
