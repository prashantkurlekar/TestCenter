import { Answer } from './answer';

export class Question {
  constructor(public value: string,
              public options: Array<Answer>,
              public singleSelect: boolean,
              public correctOptions: Array<number>) { }
}
