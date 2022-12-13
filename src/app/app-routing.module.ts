import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './components/detail/detail.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: 'post',
    component:PostsComponent
  },
  {
    path: 'dettagli',
    component:DetailComponent
  },
  {
    path: 'card',
    component:CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
