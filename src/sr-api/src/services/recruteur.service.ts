/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Recruteur } from '../models/recruteur';
@Injectable({
  providedIn: 'root',
})
class RecruteurService extends __BaseService {
  static readonly updatePath = '/systemrecrutement/v1/recruteur/update/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `RecruteurService.UpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  updateResponse(params: RecruteurService.UpdateParams): __Observable<__StrictHttpResponse<Recruteur>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/systemrecrutement/v1/recruteur/update/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Recruteur>;
      })
    );
  }
  /**
   * @param params The `RecruteurService.UpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  update(params: RecruteurService.UpdateParams): __Observable<Recruteur> {
    return this.updateResponse(params).pipe(
      __map(_r => _r.body as Recruteur)
    );
  }
}

module RecruteurService {

  /**
   * Parameters for update
   */
  export interface UpdateParams {
    id: number;
    body?: Recruteur;
  }
}

export { RecruteurService }
