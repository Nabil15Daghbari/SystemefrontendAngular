/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DemandesDto } from '../models/demandes-dto';
@Injectable({
  providedIn: 'root',
})
class DemandeService extends __BaseService {
  static readonly findAllPath = '/systemrecrutement/v1/demande/All';
  static readonly savePath = '/systemrecrutement/v1/demande/create';
  static readonly deletePath = '/systemrecrutement/v1/demande/delete/{idDemande}';
  static readonly findByIdPath = '/systemrecrutement/v1/demande/{idDemande}';
  static readonly updateEtatDemandePath = '/systemrecrutement/v1/demande/update/etatDemande/{idDemande}/{etatDemande}';

  static readonly findAllDemandeByIdOffrePath = '/systemrecrutement/v1/demande/filter/offre/{idOffre}';
  static readonly findDemandeByEtatDemandePath = '/systemrecrutement/v1/demande/filter/demandes/{etat}';
  static readonly findDemandeByCinPath = '/systemrecrutement/v1/demande/filter/{etat}';


  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet d'enregistrer ou modofier une demande
   * @return le demande a ete trouvee dans l BD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<DemandesDto[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/demande/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DemandesDto[]>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modofier une demande
   * @return le demande a ete trouvee dans l BD
   */
  findAll(): __Observable<DemandesDto[]> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as DemandesDto[])
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modofier une demande
   * @param body undefined
   * @return le demande cree / modifie
   */
  saveResponse(body?: DemandesDto): __Observable<__StrictHttpResponse<DemandesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/demande/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DemandesDto>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modofier une demande
   * @param body undefined
   * @return le demande cree / modifie
   */
  save(body?: DemandesDto): __Observable<DemandesDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as DemandesDto)
    );
  }

  /**
   * Cette methode permet de supprimer  une demande par son ID
   * @param idDemande undefined
   * @return le demande a ete supprimer dans l BD
   */
  deleteResponse(idDemande: number): __Observable<__StrictHttpResponse<DemandesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/demande/delete/${idDemande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DemandesDto>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer  une demande par son ID
   * @param idDemande undefined
   * @return le demande a ete supprimer dans l BD
   */
  delete(idDemande: number): __Observable<DemandesDto> {
    return this.deleteResponse(idDemande).pipe(
      __map(_r => _r.body as DemandesDto)
    );
  }

  /**
   * Cette methode permet de chercher  une demande par son ID
   * @param idDemande undefined
   * @return le demande a ete trouvee dans l BD
   */
  findByIdResponse(idDemande: number): __Observable<__StrictHttpResponse<DemandesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/demande/${idDemande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DemandesDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher  une demande par son ID
   * @param idDemande undefined
   * @return le demande a ete trouvee dans l BD
   */
  findById(idDemande: number): __Observable<DemandesDto> {
    return this.findByIdResponse(idDemande).pipe(
      __map(_r => _r.body as DemandesDto)
    );
  }

  /**
   * Cette methode permet de modifier l'etat  d'une  demande par son ID
   * @param params The `DemandeService.UpdateEtatDemandeParams` containing the following parameters:
   *
   * - `idDemande`:
   *
   * - `etatDemande`:
   *
   * @return l'etet du deande a ete modifier
   */
  updateEtatDemandeResponse(params: DemandeService.UpdateEtatDemandeParams): __Observable<__StrictHttpResponse<DemandesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/systemrecrutement/v1demande/update/etatDemande/${params.idDemande}/${params.etatDemande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DemandesDto>;
      })
    );
  }
  /**
   * Cette methode permet de modifier l'etat  d'une  demande par son ID
   * @param params The `DemandeService.UpdateEtatDemandeParams` containing the following parameters:
   *
   * - `idDemande`:
   *
   * - `etatDemande`:
   *
   * @return l'etet du deande a ete modifier
   */
  updateEtatDemande(params: DemandeService.UpdateEtatDemandeParams): __Observable<DemandesDto> {
    return this.updateEtatDemandeResponse(params).pipe(
      __map(_r => _r.body as DemandesDto)
    );
  }






  
/**
   * @param idOffre undefined
   * @return successful operation
   */
findAllDemandeByIdOffreResponse(idOffre: number): __Observable<__StrictHttpResponse<Array<DemandesDto>>> {
  let __params = this.newParams();
  let __headers = new HttpHeaders();
  let __body: any = null;
  let req = new HttpRequest<any>(
    'GET',
         this.rootUrl + `/systemrecrutement/v1/demande/filter/offre/${idOffre}`,
      __body,
    {
      headers: __headers,
      params: __params,
      responseType: 'json'
    });

  return this.http.request<any>(req).pipe(
    __filter(_r => _r instanceof HttpResponse),
    __map((_r) => {
      return _r as __StrictHttpResponse<Array<DemandesDto>>;
    })
  );
}
/**
 * @param idOffre undefined
 * @return successful operation
 */
findAllDemandeByIdOffre(idOffre: number): __Observable<Array<DemandesDto>> {
  return this.findAllDemandeByIdOffreResponse(idOffre).pipe(
    __map(_r => _r.body as Array<DemandesDto>)
  );
}


/**
* Cette methode permet de chercher un demande par son etat
* @param etat undefined
* @return L'demande a ete trouve dans la BDD
*/
findDemandeByEtatDemandeResponse(etat: string): __Observable<__StrictHttpResponse<DemandesDto[]>> {
 let __params = this.newParams();
 let __headers = new HttpHeaders();
 let __body: any = null;

 let req = new HttpRequest<any>(
   'GET',
   this.rootUrl + `/systemrecrutement/v1/demande/filter/demandes/${etat}`,
   __body,
   {
     headers: __headers,
     params: __params,
     responseType: 'json'
   });

 return this.http.request<any>(req).pipe(
   __filter(_r => _r instanceof HttpResponse),
   __map((_r) => {
     return _r as __StrictHttpResponse<DemandesDto[]>;
   })
 );
}
/**
* Cette methode permet de chercher un article par son CODE
* @param etat undefined
* @return L'article a ete trouve dans la BDD
*/
findDemandeByEtatDemande(etat: string): __Observable<DemandesDto[]> {
 return this.findDemandeByEtatDemandeResponse(etat).pipe(
   __map(_r => _r.body as DemandesDto[])
 );
}



/**
* Cette methode permet de chercher un demande par son etat
* @param cin undefined
* @return L'demande a ete trouve dans la BDD
*/
findDemandeByCinResponse(cin: string): __Observable<__StrictHttpResponse<DemandesDto>> {
  let __params = this.newParams();
  let __headers = new HttpHeaders();
  let __body: any = null;
 
  let req = new HttpRequest<any>(
    'GET',
    this.rootUrl + `/systemrecrutement/v1/demande/filter/${cin}`,
    __body,
    {
      headers: __headers,
      params: __params,
      responseType: 'json'
    });
 
  return this.http.request<any>(req).pipe(
    __filter(_r => _r instanceof HttpResponse),
    __map((_r) => {
      return _r as __StrictHttpResponse<DemandesDto>;
    })
  );
 }
 /**
 * Cette methode permet de chercher un article par son CODE
 * @param cin undefined
 * @return L'article a ete trouve dans la BDD
 */
 findDemandeByCin(cin: string): __Observable<DemandesDto> {
  return this.findDemandeByCinResponse(cin).pipe(
    __map(_r => _r.body as DemandesDto)
  );
 }






}


module DemandeService {

  /**
   * Parameters for updateEtatDemande
   */
  export interface UpdateEtatDemandeParams {
    idDemande: number;
    etatDemande: 'ENCOURS' | 'ADMIS' | 'LISTEATTENTE' | 'CONVOQUUEPOURENTRETIEN';
  }
}

export { DemandeService }
