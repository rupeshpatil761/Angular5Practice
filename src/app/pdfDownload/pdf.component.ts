import { Component } from "@angular/core";

import { Http, Headers, RequestOptions, RequestMethod, RequestOptionsArgs, URLSearchParams,Response} from '@angular/http';

import { Observable, Subject,Subscription} from 'rxjs';


@Component({
  selector: 'pdf-download',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  title = 'app';

  constructor(private http:Http) {}

  private options = new RequestOptions(
    { headers: new Headers({ 'Content-Type': 'application/json' })});

downloadSampleCSVFiles() {
    var nameOfFileToDownload = "22";
    var result = this.downloadSampleCSV(nameOfFileToDownload);
    result.subscribe(
        success => {

            //console.log(success);
            //console.log("<<<<<<response");

            var blob = new Blob([success["_body"]], { type: 'application/pdf' });

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, nameOfFileToDownload);
            } else {
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = nameOfFileToDownload;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        },
        err => {
            alert("Server error while downloading file.");
        }
    );
}

downloadSampleCSV(fileNameToDownload) {
    //return this.http.get("http://192.168.1.248:8021/download-quotation-for-pdf1/22");
    return this.http.post("http://192.168.1.248:8021/download-quotation-for-pdf1", fileNameToDownload, this.options);

}

  
}