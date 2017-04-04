import { Injectable } from '@angular/core';
import { Logger, FirebaseBackend } from '../../providers';

@Injectable()
export class CategoryService {

  constructor(public logger: Logger, public backend: FirebaseBackend) { ; }

  public categories(organization: string): any {
    this.logger.log(`CategoryService.categories`);
    return this.backend.getCategories(organization);
  }

  public createCategory(organization: string, category: any): firebase.Promise<any> {
    this.logger.log(`CategoryService.createCategory`);
    return this.backend.saveCategory(organization, category);
  }

}
