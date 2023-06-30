/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntretienDto } from '../models/entretien-dto';
@Injectable({
  providedIn: 'root',
})
class EntretienService extends __BaseService {
  static readonly findAllPath = '/systemrecrutement/v1/entretien/All';
  static readonly deletePath = '/systemrecrutement/v1/entretien/delete/{idEntretien}';
  static readonly findByIdPath = '/systemrecrutement/v1/entretien/{idEntretien}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de chercher les entretiens dans BDD
   * @return les entretien  ont ete trouvee dans l BD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<EntretienDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/entretien/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntretienDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher les entretiens dans BDD
   * @return les entretien  ont ete trouvee dans l BD
   */
  findAll(): __Observable<EntretienDto> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as EntretienDto)
    );
  }

  /**
   * Cette methode permet de supprimer un entretien par son id
   * @param idEntretien undefined
   * @return l'entretien a ete supprimer dans la BDD
   */
  deleteResponse(idEntretien: number): __Observable<__StrictHttpResponse<EntretienDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/entretien/delete/${idEntretien}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntretienDto>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un entretien par son id
   * @param idEntretien undefined
   * @return l'entretien a ete supprimer dans la BDD
   */
  delete(idEntretien: number): __Observable<EntretienDto> {
    return this.deleteResponse(idEntretien).pipe(
      __map(_r => _r.body as EntretienDto)
    );
  }

  /**
   * Cette methode permet de chercher un entretien par son ID
   * @param idEntretien undefined
   * @return l'entretien a ete trouvee dans l BD
   */
  findByIdResponse(idEntretien: number): __Observable<__StrictHttpResponse<EntretienDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/entretien/${idEntretien}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntretienDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher un entretien par son ID
   * @param idEntretien undefined
   * @return l'entretien a ete trouvee dans l BD
   */
  findById(idEntretien: number): __Observable<EntretienDto> {
    return this.findByIdResponse(idEntretien).pipe(
      __map(_r => _r.body as EntretienDto)
    );
  }
}

module EntretienService {
}

export { EntretienService }
