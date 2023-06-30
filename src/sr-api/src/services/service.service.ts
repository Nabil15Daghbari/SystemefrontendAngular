/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServicesDto } from '../models/services-dto';
import { Services } from '../models/services';
@Injectable({
  providedIn: 'root',
})
class ServiceService extends __BaseService {
  static readonly deletePath = '/systemrecrutement/v1/service/delete/{idService}';
  static readonly updatePath = '/systemrecrutement/v1/service/update/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de supprimer un candidat par son ID
   * @param idService undefined
   * @return le candidat a ete supprimer dans l BD
   */
  deleteResponse(idService: number): __Observable<__StrictHttpResponse<ServicesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/service/delete/${idService}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServicesDto>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un candidat par son ID
   * @param idService undefined
   * @return le candidat a ete supprimer dans l BD
   */
  delete(idService: number): __Observable<ServicesDto> {
    return this.deleteResponse(idService).pipe(
      __map(_r => _r.body as ServicesDto)
    );
  }

  /**
   * @param params The `ServiceService.UpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  updateResponse(params: ServiceService.UpdateParams): __Observable<__StrictHttpResponse<Services>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/systemrecrutement/v1/service/update/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Services>;
      })
    );
  }
  /**
   * @param params The `ServiceService.UpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  update(params: ServiceService.UpdateParams): __Observable<Services> {
    return this.updateResponse(params).pipe(
      __map(_r => _r.body as Services)
    );
  }
}

module ServiceService {

  /**
   * Parameters for update
   */
  export interface UpdateParams {
    id: number;
    body?: Services;
  }
}

export { ServiceService }
