import { Component,Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'currencyPipe'})
export class CustomCurrency implements PipeTransform {
  transform(items: any[], value: string): string {
      return items.slice(1)+' ' +items.slice(0,1);
  }
}