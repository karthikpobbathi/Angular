import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import {FormsModule} from '@angular/forms';
import { Lab21Component } from './lab21/lab21.component';
import { Lab42Component } from './lab42/lab42.component';
import { FilterPipe } from './filter.pipe';
import { Lab3Component } from './lab3/lab3.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    Lab21Component,
    Lab42Component,
    FilterPipe,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
