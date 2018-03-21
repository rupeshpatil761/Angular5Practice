import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from 'angular2-datatable';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import {PaginationComponent} from './pagination/pagination.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ParamsComponent} from './params/params.component';
import {UserService} from './services/users.service';
import {UserComponent} from './user/user.component';
import {FormsModule} from '@angular/forms';
import {DatePickerComponenet} from './datepicker/datepicker.component';
import {DatePickerService} from './services/datepicker.service';
import { Md2Module }  from 'md2';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const routes : Routes = [{path:"",component : HomeComponent},{path:"pagination",component : PaginationComponent},
{path:"params",component : ParamsComponent},{path:"user",component : UserComponent},{path:"date-picker",component : DatePickerComponenet}]; // {path:"user/:id",component : UserComponent}


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    HeaderComponent,
    HomeComponent,
    ParamsComponent,
    UserComponent,
    DatePickerComponenet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot(routes),
    Md2Module,
    NoopAnimationsModule
  ],
  providers: [UserService,DatePickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
