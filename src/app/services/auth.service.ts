import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject, map, ReplaySubject, Subject } from 'rxjs';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

export interface Register {
  // name: string,
  email: string,
  password: string,
  returnSecureToken: true
}
export interface Login {
  // name: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlUp: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyay-8Yx5qqp9W1FMQKdzVC4vfyGDBAoQ'
  urlIn: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyay-8Yx5qqp9W1FMQKdzVC4vfyGDBAoQ'

  user: User | undefined;

  // authSubject = new BehaviorSubject<null|User>(null);
  // user$ = this.authSubject.asObservable()
  // isLoggedIn$ = this.user$.pipe(map(u=>!!u))


  isLoggedin = new BehaviorSubject<boolean>(false);
  toggle = this.isLoggedin.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: {}) {
    return this.http.post(this.urlUp, user);
  }

  signIn(user: {}) {
    return this.http.post<User>(this.urlIn, user).pipe(tap(data => {
      // this.authSubject.next(data);
      this.isLoggedin.next(true);
    }));
  }

  logOut() {
    this.isLoggedin.next(false);
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate)
  }
}
