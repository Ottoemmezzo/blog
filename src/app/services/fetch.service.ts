import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Posts } from '../models/posts.interface';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
import { AuthService } from './auth.service';

export interface Profile {
  email: string,
  userId: string,
  name: string,
  id: number,
  description: string,
  avatar: string
}
@Injectable({
  providedIn: 'root'
})

export class FetchService {
  posts: Posts[] = []
  Url = 'https://6396ee0a86d04c763384ef91.mockapi.io/posts';
  UrlProfile = 'https://6396ee0a86d04c763384ef91.mockapi.io/profile'


  constructor(private http: HttpClient, private authSrv: AuthService) { }

  get() {
    return this.http.get<Posts[]>(this.Url).pipe(map(ris => ris));
  }

  getD(id: number) {
    return this.http.get<Posts>('https://6396ee0a86d04c763384ef91.mockapi.io/posts/' + id).pipe(map(res => res));
  }


  addPost(post: {title: string, body: string}) {
    return this.http.post<Posts>(this.Url, post);
  }

  edit(id: number, data: any) {
    return this.http.put<Posts>('https://6396ee0a86d04c763384ef91.mockapi.io/posts/' + id, data);
  }

  removePost(id: number) {
    return this.http.delete(`${this.Url}/${id}`);
  }

  getProfile(){
    return this.http.get<Profile[]>('https://6396ee0a86d04c763384ef91.mockapi.io/profile/')
  }

  addProfile(profile: {email: string}) {
    return this.http.post<Profile>(this.UrlProfile, profile);
  }


}
