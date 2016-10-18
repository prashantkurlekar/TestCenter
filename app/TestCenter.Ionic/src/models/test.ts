import { Question } from './question';

export class Test {
  constructor(public subject: string,
              public description: string,
              public questions: Array<Question>) { }
}
