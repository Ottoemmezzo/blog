import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mail = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }


  getErrorMessage() {
    if (this.mail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.mail.hasError('email') ? 'Not a valid email' : '';
  }

}


