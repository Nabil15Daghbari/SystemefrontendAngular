/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContratsDto } from '../models/contrats-dto';
@Injectable({
  providedIn: 'root',
})
class ContratService extends __BaseService {
  static readonly savePath = '/systemrecrutement/v1/contrat/create';
  static readonly findByIdPath = '/systemrecrutement/v1/contrat/{idContrat}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet d'enregistrer ou modofier un contrat
   * @param body undefined
   * @return le contrat cree / modifie
   */
  saveResponse(body?: ContratsDto): __Observable<__StrictHttpResponse<ContratsDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/contrat/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContratsDto>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modofier un contrat
   * @param body undefined
   * @return le contrat cree / modifie
   */
  save(body?: ContratsDto): __Observable<ContratsDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ContratsDto)
    );
  }

  /**
   * Cette methode permet de chercher un contrat
   * @param idContrat undefined
   * @return le contrat a ete trouvee dans l BD
   */
  findByIdResponse(idContrat: number): __Observable<__StrictHttpResponse<ContratsDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/contrat/${idContrat}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContratsDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher un contrat
   * @param idContrat undefined
   * @return le contrat a ete trouvee dans l BD
   */
  findById(idContrat: number): __Observable<ContratsDto> {
    return this.findByIdResponse(idContrat).pipe(
      __map(_r => _r.body as ContratsDto)
    );
  }
}

module ContratService {
}

export { ContratService }
