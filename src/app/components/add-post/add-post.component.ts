import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private authSrv: FetchService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.authSrv.addPost(form.value).subscribe()
    this.router.navigate(['/post'])
  }

}
