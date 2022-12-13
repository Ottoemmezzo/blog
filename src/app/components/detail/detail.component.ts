import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Posts } from 'src/app/models/posts.interface';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  sub!: Subscription
  id!: number

  constructor(private router: ActivatedRoute, private fetchSrv: FetchService) { }

  ngOnInit(): void {

  }

}
