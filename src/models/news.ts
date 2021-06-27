import { UUID } from 'angular2-uuid';

export interface News {
  id: UUID;
  title: string;
  address: string;
  description: string;
  publicationDate: string;
  text: string;
  goodnessCoefficient: number;
  rssId: number;
}
