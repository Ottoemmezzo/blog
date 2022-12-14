import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/posts.interface';
import { FetchService } from 'src/app/services/fetch.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: number
  post!: Posts;
  loading = true;

  constructor(private router: ActivatedRoute, private fetchSrv: FetchService) { }

  ngOnInit():void {
    this.id = this.router.snapshot.params['id'];
    this.detail();
  }

  detail() {
    this.fetchSrv.getD(this.id).subscribe(data => {
      this.post = data;
      console.log(data)
      this.loading = false;
    })
  }

}
