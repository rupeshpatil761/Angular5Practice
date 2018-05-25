import { Component,LOCALE_ID, AfterViewInit } from "@angular/core";
import { CurrencyPipe } from '@angular/common';
declare var $ : any;

@Component({
    selector:"pipes",
    templateUrl:"./pipes.component.html",
    providers:[CurrencyPipe]//{provide: LOCALE_ID, useValue: 'es-ES'}
})
export class PipesComponent implements  AfterViewInit {
    cur : number = 10000;
    formattedAmount: string = '0';
    value: any;

    constructor(private currencyPipe: CurrencyPipe) {

    }

    ngAfterViewInit() {
      $(function(){
        $("#demo1").maskMoney({
        
          // The symbol to be displayed before the value entered by the user
          prefix:'', 
  
          // The suffix to be displayed after the value entered by the user(example: "1234.23 €"). 
          suffix: "",
  
          // Delay formatting of text field until focus leaves the field
          formatOnBlur: false,
  
          // Prevent users from inputing zero
          allowZero:false, 
  
          // Prevent users from inputing negative values
          allowNegative:true, 
  
          // Allow empty input values, so that when you delete the number it doesn't reset to 0.00. 
          allowEmpty: false,
  
          // Select text in the input on double click
          doubleClickSelection: true, 
  
          // Select all text in the input when the element fires the focus event. 
          selectAllOnFocus: false,
  
          // The thousands separator
          thousands: '.', 
  
          // The decimal separator
          decimal: ',' , 
  
          // How many decimal places are allowed
          precision: 2, 
  
          // Set if the symbol will stay in the field after the user exits the field. 
          affixesStay : false, 
  
          // Place caret at the end of the input on focus 
          bringCaretAtEndOnFocus: true 
      }); 
      });
    }
  
    transformAmount(element) {
      try {
        if (typeof (element.target.value) !== 'number')
          this.formattedAmount = this.currencyPipe.transform(this.value, 'EUR',"symbol",undefined,'es-ES');
        // Remove or comment this line if you dont want
        // to show the formatted amount in the textbox.
        element.target.value = this.formattedAmount;
      } catch (e) {
        console.log(e);
      }
    }

    removeCurrencyPipeFormat(element) {
        try {
          if (element.target.value.indexOf('₹') !== -1) {
            this.formattedAmount = this.formattedAmount.replace(/[₹,]/g, "")
            element.target.value = this.formattedAmount;
          } else {
            this.formattedAmount = '0';
          }
        } catch (e) {
          console.log(e);
        }
      }
}