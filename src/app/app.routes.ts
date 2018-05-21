import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaginationComponent} from './pagination/pagination.component';
import {ParamsComponent} from './params/params.component';
import {FormsComponent} from './forms/forms.component';
import {UserComponent} from './user/user.component';
import {DatePickerComponenet} from './datepicker/datepicker.component';
import {DatatableComponent} from './datatable/datatable.component';
import {PdfComponent} from './pdfDownload/pdf.component';
import {Angular5CSV} from './angular5csv/angular5csv.component';
import {ModuleWithProviders} from '@angular/core';
import { ObservableComponent } from './observable/observable.component';

export const routes : Routes = [{path:"",component : HomeComponent},{path:"pagination",component : PaginationComponent},
{path:"params",component : ParamsComponent},{path:"user",component : UserComponent},{path:"date-picker",component : DatePickerComponenet}
,{path:"angular5csv",component : Angular5CSV},{path:"todo-observable",component:ObservableComponent},{path:'first-module', loadChildren: './first.module#FirstModule'}];
//{path:"forms",component : FormsComponent},{path:"datatable",component : DatatableComponent},{path:"pdf-download",component : PdfComponent}
//{path:'first-module', loadChildren: './first.module#FirstModule'}];  <<< Multiple modules with lazy loading but need to share header component between modules

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);