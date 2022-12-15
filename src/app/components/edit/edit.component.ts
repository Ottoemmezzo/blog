import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.interface';
import { FetchService } from 'src/app/services/fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  post!: Posts;

  id!: number;
  constructor(private fetchSrv: FetchService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.fetchEdit();
  }

  onSubmit() {
    const data = {
      title: this.post.title,
      body: this.post.body
    }

    this.fetchSrv.edit(this.id, data).subscribe(data => this.id = data.id);

    this.route.navigate(['/post/' + this.post.id])
  }

  fetchEdit() {
    this.fetchSrv.getD(this.id).subscribe(data => {
      this.post = data;

    })
  }
}
