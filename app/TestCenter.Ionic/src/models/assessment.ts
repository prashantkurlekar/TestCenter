import { Question } from './question';

export class Assessment {
  public id: string;
  public name: string;
  public shortName: string;
  public description: string;
  public categories: Array<string>;
  public questions: Array<Question>;

  constructor(name: string, shortName: string,
    description: string, categories: Array<string>) {
    this.name = name;
    this.shortName = shortName;
    this.description = description;
    this.categories = categories;
  }
}
