/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AffectationDto } from '../models/affectation-dto';
@Injectable({
  providedIn: 'root',
})
class AffectationService extends __BaseService {
  static readonly findAllPath = '/systemrecrutement/v1/affectation/All';
  static readonly savePath ='/systemrecrutement/v1/affectation/create'


  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }



  /**
   * Cette methode permet d'enregistrer ou modofier une demande
   * @param body undefined
   * @return le demande cree / modifie
   */
  saveResponse(body?: AffectationDto): __Observable<__StrictHttpResponse<AffectationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/affectation/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AffectationDto>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modofier une demande
   * @param body undefined
   * @return le demande cree / modifie
   */
  save(body?: AffectationDto): __Observable<AffectationDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as AffectationDto)
    );
  }


  /**
   * Cette methode permet de chercher les affectation dans BDD
   * @return les affecation ont ete trouvee dans l BD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<AffectationDto[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/affectation/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AffectationDto[]>;
      })
    );
  }
  /**
   * Cette methode permet de chercher les affectation dans BDD
   * @return les affecation ont ete trouvee dans l BD
   */
  findAll(): __Observable<AffectationDto[]> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as AffectationDto[])
    );
  }
}

module AffectationService {
}

export { AffectationService }
