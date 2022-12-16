import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      this.authSrv.isLoggedin.next(true)
    }
  }

  logOut() {
    this.authSrv.logOut()
  }
}
