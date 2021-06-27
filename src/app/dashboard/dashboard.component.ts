import { News } from './../../models/news';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newsCollection: News[] = [];
  selectedNews?: News;
  // private dataSource = new MatTableDataSource(this.newsCollection);

  // @ViewChild(MatPaginator) paginator: MatPaginator | null;
  // private dataSource = new MatTableDataSource(this.newsCollection);
  pageSlice?: News[];

  constructor(private newsService: NewsService) {
    // this.dataSource.paginator = this.paginator;
    this.OnPageChange(new PageEvent);
  }

  ngOnInit(): void {
   this.getNews();
   this.OnPageChange(new PageEvent);
 }

 getNews(): void {
  this.newsService.getTopRatedNews()
    .subscribe(news => this.newsCollection = news);
    this.OnPageChange(new PageEvent);
 }

 select(news: News): void {
  console.log(news);
  this.selectedNews = news;
}

OnPageChange(event: PageEvent){
  const startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;
  if (endIndex > this.newsCollection.length){
    endIndex = this.newsCollection.length;
  }
  this.pageSlice = this.newsCollection.slice(startIndex, endIndex);
}

}
