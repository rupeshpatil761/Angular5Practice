import { Component } from "@angular/core";

import { Http, Headers, RequestOptions, RequestMethod, RequestOptionsArgs, URLSearchParams,Response,ResponseContentType} from '@angular/http';

import { Observable, Subject,Subscription} from 'rxjs';

import { saveAs } from 'file-saver';


@Component({
  selector: 'pdf-download',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  title = 'app';

  constructor(private http:Http) {}

  private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' })});

downloadFile(){
    this.downloadPdf(22);
}

downloadPdf(id: number) {
    var options = new RequestOptions(
        { headers: new Headers({ 'Content-Type': 'application/json' })});
    return this.http
              .get("http://192.168.1.248:8021/api/file", { responseType:ResponseContentType.Blob })
      .toPromise().then(response => this.saveToFileSystem(response));;
  }


saveToFileSystem(response){
    //console.log(response);
    //console.log("<<<<<<response");
    var blob = new Blob([response["_body"]], { type: 'application/pdf' });
    //console.log(blob);console.log(" <<<blob");
    saveAs(blob, "myPDF.pdf");
}
  
}