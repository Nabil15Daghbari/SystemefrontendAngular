/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CandidatDto } from '../models/candidat-dto';
@Injectable({
  providedIn: 'root',
})
class CandidatService extends __BaseService {
  static readonly findAllPath = '/systemrecrutement/v1/candidat/All';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de chercher les article dans BDD
   * @return les candidats ont ete trouvee dans l BD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<CandidatDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/candidat/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CandidatDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher les article dans BDD
   * @return les candidats ont ete trouvee dans l BD
   */
  findAll(): __Observable<CandidatDto> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as CandidatDto)
    );
  }
}

module CandidatService {
}

export { CandidatService }
