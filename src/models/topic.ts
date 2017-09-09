import { Category } from './category';

export interface Topic {
  id: number;
  organizationId: number;
  name: string;
  detail: string;
  icon: string;
  image: string;
  categories: Array<Category>;
}
