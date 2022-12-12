import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: 'post',
    component:PostsComponent
  }
 /* {
    path: '',
    component:AppComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
