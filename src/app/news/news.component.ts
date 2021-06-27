import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  newsCollection: News[] = [];
  selectedNews?: News;

  constructor(private newsService: NewsService) {
   }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.newsCollection = this.newsService.getNews();
  }

  select(news: News): void {
    console.log(news);
    this.selectedNews = news;
  }
}
