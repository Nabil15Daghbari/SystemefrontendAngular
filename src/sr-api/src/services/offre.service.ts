/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OffresDto } from '../models/offres-dto';
import { Offres } from '../models/offres';
@Injectable({
  providedIn: 'root',
})
class OffreService extends __BaseService {
  static readonly deletePath = '/systemrecrutement/v1/offre/delete/{idOffre}';
  static readonly findOffresByCodeOffrePath = '/systemrecrutement/v1/offre/filter/{codeOffre}';
  static readonly updatePath = '/systemrecrutement/v1/offre/update/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet supprimer une offre
   * @param idOffre undefined
   * @return l'offre a ete supprimer dans l BD
   */
  deleteResponse(idOffre: number): __Observable<__StrictHttpResponse<OffresDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/offre/delete/${idOffre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OffresDto>;
      })
    );
  }
  /**
   * Cette methode permet supprimer une offre
   * @param idOffre undefined
   * @return l'offre a ete supprimer dans l BD
   */
  delete(idOffre: number): __Observable<OffresDto> {
    return this.deleteResponse(idOffre).pipe(
      __map(_r => _r.body as OffresDto)
    );
  }

  /**
   * Cette methode permet de chercher un offre par son CODE
   * @param codeOffre undefined
   * @return offre a ete trouve dans la BDD
   */
  findOffresByCodeOffreResponse(codeOffre: string): __Observable<__StrictHttpResponse<OffresDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/offre/filter/${codeOffre}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OffresDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher un offre par son CODE
   * @param codeOffre undefined
   * @return offre a ete trouve dans la BDD
   */
  findOffresByCodeOffre(codeOffre: string): __Observable<OffresDto> {
    return this.findOffresByCodeOffreResponse(codeOffre).pipe(
      __map(_r => _r.body as OffresDto)
    );
  }

  /**
   * @param params The `OffreService.UpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  updateResponse(params: OffreService.UpdateParams): __Observable<__StrictHttpResponse<Offres>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/systemrecrutement/v1/offre/update/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Offres>;
      })
    );
  }
  /**
   * @param params The `OffreService.UpdateParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return successful operation
   */
  update(params: OffreService.UpdateParams): __Observable<Offres> {
    return this.updateResponse(params).pipe(
      __map(_r => _r.body as Offres)
    );
  }
}

module OffreService {

  /**
   * Parameters for update
   */
  export interface UpdateParams {
    id: number;
    body?: Offres;
  }
}

export { OffreService }
