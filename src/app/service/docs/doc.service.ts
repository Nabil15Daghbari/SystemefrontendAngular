import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doc } from 'src/sr-api/src/models';
import { DocumentService } from 'src/sr-api/src/services/document.service';

@Injectable({
  providedIn: 'root'
})
export class DocService {



  constructor(
    private docService : DocumentService , 
  ) { }


  uploadFile(files: Array<Blob>): Observable<Doc>{
    return this.docService.uploadMultipleFiles(files);
  }

  


  

}
