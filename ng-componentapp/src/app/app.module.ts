import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import{FormsModule } from '@angular/forms';
import { BookMyShowComponent } from './book-my-show/book-my-show.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ShowLangDescComponent } from './show-lang-desc/show-lang-desc.component';
import { StatesCitiesComponent } from './states-cities/states-cities.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { PipePipe } from './pipe.pipe';
import { ProductFilterPipe } from './product-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CalculatorComponent,
    BookMyShowComponent,
    TodoListComponent,
    ShowLangDescComponent,
    StatesCitiesComponent,
    ProductDetailsComponent,
    SearchComponent,
    PipePipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
