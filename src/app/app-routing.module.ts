import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'post',
    component: PostsComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'post/:id',
    component: DetailComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'post/edit/:id',
    component: EditComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'add',
    component: AddPostComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
