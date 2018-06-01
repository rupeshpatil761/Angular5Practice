import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomCurrency} from './services/currency.pipe';
import { CurrencyPipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomCurrency
  ],
  exports:[
    CustomCurrency
  ],
  providers:[CurrencyPipe]
})
export class ShareableModule { }