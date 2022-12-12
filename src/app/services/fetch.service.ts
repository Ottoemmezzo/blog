import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Posts } from '../models/posts.interface';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  posts: Posts[] = []
  Url = 'https://6396ee0a86d04c763384ef91.mockapi.io/posts';
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Posts[]>(this.Url).pipe(map(ris => ris));
  }


}
