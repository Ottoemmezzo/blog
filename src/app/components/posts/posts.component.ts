import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import { Posts } from 'src/app/models/posts.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  sub!: Subscription
  posts: Posts[] = [];
  constructor(private fetchSrv: FetchService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getPost();

  }

  getPost() {
    this.sub = this.fetchSrv.get().subscribe((ris) => {
      this.posts = ris;
      console.log(ris)
    });
  }

}

