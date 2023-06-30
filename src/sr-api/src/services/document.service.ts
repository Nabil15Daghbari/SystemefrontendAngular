/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ByteArrayResource } from '../models/byte-array-resource';
import { Doc } from '../models/doc';
@Injectable({
  providedIn: 'root',
})
class DocumentService extends __BaseService {
  static readonly downloadFilePath = '/systemrecrutement/v1/downloadFile/{fileId}';
  static readonly getPath = '/systemrecrutement/v1/get';
  static readonly uploadMultipleFilesPath = '/systemrecrutement/v1/uploadFiles';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param fileId undefined
   * @return successful operation
   */
  downloadFileResponse(fileId: number): __Observable<__StrictHttpResponse<ByteArrayResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/downloadFile/${fileId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ByteArrayResource>;
      })
    );
  }
  /**
   * @param fileId undefined
   * @return successful operation
   */
  downloadFile(fileId: number): __Observable<ByteArrayResource> {
    return this.downloadFileResponse(fileId).pipe(
      __map(_r => _r.body as ByteArrayResource)
    );
  }

  /**
   * @return successful operation
   */
  getResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/get`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return successful operation
   */
  get(): __Observable<string> {
    return this.getResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modofier une document
   * @param files undefined
   * @return le doc cree / modifie
   */
  uploadMultipleFilesResponse(files: Array<Blob>): __Observable<__StrictHttpResponse<Doc>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;
   if(files !== null && typeof files !== "undefined") { __formData.append('files', JSON.stringify(files));}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/uploadFiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Doc>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modofier une document
   * @param files undefined
   * @return le doc cree / modifie
   */
  uploadMultipleFiles(files: Array<Blob>): __Observable<Doc> {
    return this.uploadMultipleFilesResponse(files).pipe(
      __map(_r => _r.body as Doc)
    );
  }
}

module DocumentService {
}

export { DocumentService }
