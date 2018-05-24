import { Component } from "@angular/core";

import { Http, Headers, RequestOptions, RequestMethod, RequestOptionsArgs, URLSearchParams,Response,ResponseContentType} from '@angular/http';

import { Observable, Subject,Subscription} from 'rxjs';

import {HttpClient, HttpHeaders ,HttpParams} from "@angular/common/http";

import { saveAs } from 'file-saver';


@Component({
  selector: 'pdf-download',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  title = 'app';

  private headers = new HttpHeaders();
  private autherization:string = "3ff05136-94ae-4ef6-9913-a9cdfd948378";

  constructor(private http:Http,private httpClient:HttpClient) {
  }


  downloadFile(){
    this.downloadPdf(22);
  }

  downloadPdf(id: number) {

    //var options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});
    /*return this.http.get("http://192.168.1.248:8021/api/file/42", { responseType:ResponseContentType.Blob })
    .toPromise().then(response => this.saveToFileSystem(response));;*/
    this.headers = new HttpHeaders({ 'Authorization': this.autherization});

    /*const requestOptions = {
        params: new HttpParams().set('headers', this.headers).append('responseType','blob')
    };*/

    //requestOptions.params.set('headers', this.headers).append('responseType','blob');

    //console.log(requestOptions);console.log("<<<<< requestOptions");
    

    /*return this.httpClient.get("http://192.168.1.248:8021/api/file/44",requestOptions)
      .toPromise().then(response => this.saveToFileSystem(response));;*/
  }
  saveToFileSystem(response){
       console.log(response);
       console.log("<<<<<<response");

       if(response==null){
         alert("Authentication Required")
         return;
       }

        if(response["status"]=="200"){
            var fileName = "myPDF.pdf";
            var blob = new Blob([response["_body"]], { type: 'application/pdf' });
            //console.log(blob.size);console.log(" <<<blob");

            if(blob.size>0){
                //Using File Saver
                //saveAs(blob, fileName);
                //Old Method

                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, fileName);
                } else {
                    var a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }    
            }else{
                alert("File not found");    
            }
        }

        if(response["status"]=="401"){
            alert("Authentication Required")
        }
        if(response["status"]=="404"){
            alert("File not found")
        }
    }
}