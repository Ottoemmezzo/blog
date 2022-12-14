import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyay-8Yx5qqp9W1FMQKdzVC4vfyGDBAoQ'

  constructor(private http: HttpClient) { }

  signUp(body: {}) {
    return this.http.post(this.url, body)
  }
}

