import { NEWS } from './../../mocks/mock-news';
import { Injectable } from '@angular/core';
import { News } from '../../models/news';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: News = {
    id: "1",
  title: "title1",
  address: "address1",
  description: "description1",
  publicationDate: "21/01/1995",
  text: "text",
  goodnessCoefficient: 1,
  rssId: 1
  };
  constructor(private apiService: ApiService) { }

  getNews(): News[]{
    return NEWS;
  }

  getTopRatedNews(): Observable<News[]>{
    return this.apiService.get('News').pipe();
  }

  //Should be verified:
  getNewsWithRSSAddressById(id: UUID): Observable<News[]>{
    return this.apiService.get('News/'+ id).pipe();
  }
}
