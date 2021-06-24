import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { NEWS } from 'src/mocks/mock-news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  newsCollection: News[] = NEWS;
  selectedNews?: News;

  constructor() {

   }

  ngOnInit(): void {
  }

  select(news: News): void {
    console.log(news);
    this.selectedNews = news;
  }
}
