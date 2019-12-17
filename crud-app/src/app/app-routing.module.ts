import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'about' ,component:AboutComponent
  },{path:'home',component:HomeComponent},{
    path:'contact', component:ContactComponent
  },
  {path:'', redirectTo:'home', pathMatch:'full'}
,{path:'**',component:PageNotFoundComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
