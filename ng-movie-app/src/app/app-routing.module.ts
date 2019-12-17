import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddMovieComponent},
  {path:'search',component:SearchMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
