import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

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

  constructor(private http: HttpClient ) { }

  signUp(user: {}){
   return this.http.post(this.urlUp, user);
  }

  signIn(user: {}){
   return this.http.post(this.urlIn, user);
  }
}
