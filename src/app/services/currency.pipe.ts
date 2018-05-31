import { Component,Pipe,PipeTransform,LOCALE_ID} from "@angular/core";
import {CurrencyPipe} from "@angular/common";

@Pipe({name:'customCurrency'})
export class CustomCurrency implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: any,currencyCode?: string,locale?:any): string {
    console.log(locale+"<<<<<<<<console.log(locale);");
    let output = this.currencyPipe.transform(value,currencyCode,'symbol',undefined,locale);
    return output.replace("€","");
  }

}
