import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import { tap, map } from 'rxjs';

export interface ProfileStorage {
  email: string,
  id: string
}
export interface Profile {
  email: string,
  userId: string,
  name: string,
  id: number,
  description: string,
  avatar: string
}






@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileStorage: ProfileStorage | undefined;
  profile: Profile | undefined;

  currentProfile: Profile[] = [];
  constructor(private fetchSrv: FetchService) { }

  ngOnInit(): void {

    if (localStorage.getItem('user')) {
      this.profileStorage = JSON.parse(localStorage.getItem('user')!);

      // this.fetchSrv.getProfile().pipe(map(data=>{
      //   data.map(data => {
      //     console.log(data.userId);
      //     if(data.userId == "ciao"){
      //       this.currentProfile = data;
      //       return data.userId
      //     }
      //     return
      //   })
      // })).subscribe(() => console.log(this.currentProfile));

      this.fetchSrv.getProfile().subscribe((data)=>{

        data.forEach((data)=>  {if (data.userId == this.profileStorage?.id){
        this.currentProfile[0] = data
       }})

      // this.currentProfile  = data
       console.log("sono data" ,data);
       console.log("sono current" ,this.currentProfile);


      })
    }

  }





}
