import { Component,OnInit} from "@angular/core";
import {User} from '../models/user.model';
import {UserService} from '../services/users.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

declare const $;

@Component({
    selector:'angular5csv',
    templateUrl:'./angular5csv.component.html'
})
export class Angular5CSV implements OnInit{
    //For XLSX DOWNLOAD
    downloadData :any[] = [];

    users: Array<User> = [];
 
    constructor(private userService:UserService){};
 
    ngOnInit(){
        this.users = this.userService.users;
    }

    _generateDownloadData(data:Array<Object>){      						
    
        return new Promise((resolve, reject) => {
    
          this.downloadData = [];
          this.downloadData.push({
            "Details":"Meeting Details Sheet"      
          });
          this.downloadData.push({
            "Employee":"Employee",
            "Customer":"Customer",
            "Product Name":"Product Name",
            "Address":"Address",
            "Start Time":"Start Time",
            "End Time":"End Time",
            "Status":"Status"                        
          }); // For labels / header of column
          for(let i=0; i<data.length;i++){      
              let rec = {
                "Employee":data[i]['employeeDetail'] != undefined ? data[i]['employeeDetail'] : "NA" ,
                "Customer":data[i]['customerName'] != undefined ? data[i]['customerName'] : "NA" ,
                "Product Name":data[i]['vehicleNo'] != undefined ? data[i]['vehicleNo'] : "NA" ,
                "Address":data[i]['flatNo'] != undefined ? data[i]['flatNo'] : "NA" ,
                "Start Time":data[i]['checkInTime'] != undefined ? new Date(data[i]['checkInTime']).toLocaleDateString()+" "+this.userService.getFormattedTime(data[i]['checkInTime']) : "NA" ,
                "End Time":data[i]['checkOutTime'] != undefined ? new Date(data[i]['checkOutTime']).toLocaleDateString()+" "+this.userService.getFormattedTime(data[i]['checkOutTime']) : "NA" ,
                "Status":data[i]['type'] != undefined ? data[i]['type'] : "NA"
              };
              this.downloadData.push(rec);
            }
              resolve();
            }).catch((error) => console.log("Error :", error));
      }
      _downloadMeetingDetails(){        
        let date = new Date().toLocaleDateString();    
        let fileName = "Meeting_" + date.replace(new RegExp("/", "g"), '_');    
        this.downloadData = [];
        this.downloadData.push({
          "Details":"Meeting Details Sheet"      
        });
        this.downloadData.push({
          "ID":"ID",
          "Name":"Name",
          "City":"City"
        });
        let data = this.users;
        for(let i=0; i<data.length;i++){      
          let rec = {
            "Id":data[i]['id'] != undefined ? data[i]['id'] : "NA" ,
            "Name":data[i]['name'] != undefined ? data[i]['name'] : "NA" ,
            "City":data[i]['city'] != undefined ? data[i]['city'] : "NA"            
          };
          this.downloadData.push(rec);
        }
        let jsonData = JSON.stringify(this.downloadData);
        var options = { 
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true, 
          showTitle: false,
          useBom: true,
          noDownload: false
        };
        new Angular5Csv(jsonData,fileName,options);        
      }
}