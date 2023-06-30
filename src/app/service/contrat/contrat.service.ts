import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private httpClient :HttpClient) { }



  getReportFacture(ReportName : any, cin : any ) {
    const httpOptions = {
        //'responseType'  : 'arraybuffer' as 'json'
         'responseType'  : 'blob' as 'json'  
      };
    return this.httpClient.get<any>('http://localhost:8081/systemrecrutement/v1/report/'+ ReportName +'/'+ cin, httpOptions );
} 




public uploadFile(file: Array<Blob>): Observable<any[]> {
  const formData:any = new FormData();
  formData.append('files', file )
    var request = this.httpClient
      .post<any[]>(
          'http://localhost:8081/systemrecrutement/v1/uploadFiles',
          formData
      );
  return request;

}



}
