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

const routes : Routes = [{path:"",component : HomeComponent},{path:"pagination",component : PaginationComponent},
{path:"params",component : ParamsComponent},{path:"user",component : UserComponent}]; // {path:"user/:id",component : UserComponent}


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    HeaderComponent,
    HomeComponent,
    ParamsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
