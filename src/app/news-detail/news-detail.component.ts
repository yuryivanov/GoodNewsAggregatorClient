import { News } from 'src/models/news';
import { NewsService } from './../services/news.service';
import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  @Input() specifiedNews?: News;
  specificNews?: News;
  newsCollection: News[] = [];

  constructor(private newsService: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.newsService.getNewsWithRSSAddressById(id as UUID)
    .subscribe(news => this.specificNews = news[0]);
  }

}
