import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  onSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    console.log(f.value);

    this.authSrv.signIn({ email: email, password: password, returnSecureToken: true }).subscribe((data:any) => {
      console.log(data)
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      this.authSrv.createUser(data.email, data.localId, data.idToken,expirationDate)
      console.log(this.authSrv.user);
      localStorage.setItem('user', JSON.stringify(this.authSrv.user))
      this.router.navigate(['/post'])
      }

    )
      ;

  }
}
