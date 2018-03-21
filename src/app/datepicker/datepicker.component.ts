import {Component,OnInit} from '@angular/core';
import { DatePickerService } from '../services/datepicker.service';
//import { DatePipe, JsonPipe } from '@angular/common';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
    selector:'date-picker',
    templateUrl : 'datepicker.component.html'
})
export class DatePickerComponenet implements OnInit ,OnDestroy{

    ngOnInit(){
        this._setCurrentDate();
        this.alive = true;
        this._updateCurrentDate();
    }
    ngOnDestroy(){
        this.alive = false;
    }

  constructor(private dateService : DatePickerService){}

  startTime: number;
  endTime: number;
  currentTime : number;
  minDate: Date;
  maxDate: Date;
  flag: Flag;
  alive: boolean; // used to unsubscribe from the TimerObservable
  // when OnDestroy is called.
  interval: number = 2000;


  minDateChanged(minDate) {
    this.startTime = this.dateService.getStartTime(minDate);
  }
  maxDateChanged(maxDate) {
    this.endTime = this.dateService.getEndTime(maxDate);
  }

  hideMaxDate() {
    if (this.flag.showHistory == true)
      return false;
    else
      return true;
  }

  //coding standards to mention local methods
  _setCurrentDate() {
    this.minDate = new Date();
    this.maxDate = new Date();
    //alert(this.minDate+"======"+this.maxDate);
    this.minDateChanged(this.minDate);
    this.maxDateChanged(this.maxDate);
    this.currentTime = new Date().getTime();
  }

    private _updateCurrentDate() {
        TimerObservable.create(0, this.interval)
        .takeWhile(() => this.alive)
        .subscribe(() => {
            //this.httpService.post('/business/eway-web-dashboard', body)
            //.subscribe((data) => {
                //processing logic goes here
            //});
            this.currentTime = new Date().getTime();
        });
    }
}
export interface Flag {
    
    showDatePicker : boolean,
    showHistory: boolean;
    
}

    //"@angular/cdk": "^5.1.0",
    
    //"@angular/material": "^5.1.0",
    
    //"amazing-time-picker": "^1.4.4",
    //"angular2-csv": "^0.2.5",
    
    //"angular2-google-maps": "^0.17.0",
    //"bootstrap": "^3.3.7",
    //"core-js": "^2.4.1",
    //"file-saver": "^1.3.3",
    //"google-maps-angular2": "^1.1.2",
    
    //"ngx-bootstrap": "^2.0.0-rc.0",
    //"polyline": "^0.2.0",
    
    //"xlsx": "^0.11.15",