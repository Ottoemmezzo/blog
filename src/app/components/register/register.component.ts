import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FetchService } from 'src/app/services/fetch.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor( private AuthSrv: AuthService, private router: Router, private fetchSrv: FetchService) { }

  ngOnInit(): void {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  onSubmit(f: NgForm){
    const email = f.value.email;
    const password = f.value.password;
    this.AuthSrv.signUp({email: email, password: password, returnSecureToken: true}).subscribe(data => console.log(f.value));
    this.router.navigate(['/login'])
  }

}
