import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';
import { ProductGuard } from './product.guard';


const routes: Routes = [
  {path:'',canActivateChild:[ProductGuard],
  children:[
   { path:'',component: LoginComponent, data:{}},
   {path:'home',component:HomeComponent,data:{roles:['admin','customer']}},
  {path:'addp', component:AddProductComponent,data:{roles:['admin']}},
  {path:'update', component:UpdateProductComponent,data:{roles:['admin']}}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
