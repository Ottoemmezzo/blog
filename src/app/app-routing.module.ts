import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostsComponent
  },
  {
    path: 'post/:id',
    component: DetailComponent
  },
  {
    path: 'post/edit/:id',
    component: EditComponent
  },
  {
    path: 'add',
    component: AddPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
