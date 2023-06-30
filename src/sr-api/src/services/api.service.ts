/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AffectationDto } from '../models/affectation-dto';
import { CandidatDto } from '../models/candidat-dto';
import { ContratsDto } from '../models/contrats-dto';
import { EntretienDto } from '../models/entretien-dto';
import { OffresDto } from '../models/offres-dto';
import { RecruteurDto } from '../models/recruteur-dto';
import { ServicesDto } from '../models/services-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly findAffectationByIdCandidatPath = '/systemrecrutement/v1/affectations/filter/candidat/{idCandidat}';
  static readonly savePath = '/systemrecrutement/v1/candidat/create';
  static readonly deletePath = '/systemrecrutement/v1/candidat/delete/{idCandidat}';
  static readonly findByIdPath = '/systemrecrutement/v1/candidat/{idCondidat}';
  static readonly findAllPath = '/systemrecrutement/v1/contrat/All';
  static readonly delete_1Path = '/systemrecrutement/v1/contrat/delete/{idContrat}';
  static readonly save_1Path = '/systemrecrutement/v1/entretien/create';
  static readonly findAll_1Path = '/systemrecrutement/v1/offre/All';
  static readonly save_2Path = '/systemrecrutement/v1/offre/createOffre';
  static readonly findById_1Path = '/systemrecrutement/v1/offre/{idOffre}';
  static readonly findAll_2Path = '/systemrecrutement/v1/recruteur/All';
  static readonly save_3Path = '/systemrecrutement/v1/recruteur/create';
  static readonly delete_2Path = '/systemrecrutement/v1/recruteur/delete/{idRecruteur}';
  static readonly findById_2Path = '/systemrecrutement/v1/recruteur/{idRecruteur}';
  static readonly findAll_3Path = '/systemrecrutement/v1/service/All';
  static readonly save_4Path = '/systemrecrutement/v1/service/create';
  static readonly findAll_4Path = '/systemrecrutement/v1/utilisateurs/all';
  static readonly delete_3Path = '/systemrecrutement/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly findByEmailPath = '/systemrecrutement/v1/utilisateurs/find/{email}';
  static readonly findById_3Path = '/systemrecrutement/v1/utilisateurs/{idUtilisateur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette methode permet de chercher les affectation dans BDD
   * @param idCandidat
   * @return les affecation ont ete trouvee dans l BD
   */
  findAffectationByIdCandidatResponse(idCandidat?:number): __Observable<__StrictHttpResponse<AffectationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/affectations/filter/candidat/${idCandidat}`,
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
   * Cette methode permet de chercher les affectation dans BDD
   * @param idCandidat
   * @return les affecation ont ete trouvee dans l BD
   */
  findAffectationByIdCandidat(idCandidat?:number): __Observable<AffectationDto> {
    return this.findAffectationByIdCandidatResponse(idCandidat).pipe(
      __map(_r => _r.body as AffectationDto)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modofier un candidat
   * 
   * @return le candidat cree / modifie
   */
  saveResponse(): __Observable<__StrictHttpResponse<CandidatDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/candidat/create`,
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
   * Cette methode permet d'enregistrer ou modofier un candidat
   * @return le candidat cree / modifie
   */
  save(): __Observable<CandidatDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as CandidatDto)
    );
  }

  /**
   * Cette methode permet de supprimer un candidat par son ID
   * @param idCandidat
   * @return le candidat a ete supprimer dans l BD
   */
  deleteResponse(idCandidat?:number): __Observable<__StrictHttpResponse<CandidatDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/candidat/delete/${idCandidat}`,
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
   * Cette methode permet de supprimer un candidat par son ID
   * @param idCandidat
   * @return le candidat a ete supprimer dans l BD
   */
  delete(idCandidat?:number): __Observable<CandidatDto> {
    return this.deleteResponse(idCandidat).pipe(
      __map(_r => _r.body as CandidatDto)
    );
  }

  /**
   * Cette methode permet de chercher   un Candidat par son ID
   * @return le candidat a ete trouvee dans l BD
   */
  findByIdResponse(idCondidat?:number): __Observable<__StrictHttpResponse<CandidatDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/candidat/${idCondidat}`,
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
   * Cette methode permet de chercher   un Candidat par son ID
   * @return le candidat a ete trouvee dans l BD
   */
  findById(idCandidat?:number): __Observable<CandidatDto> {
    return this.findByIdResponse(idCandidat).pipe(
      __map(_r => _r.body as CandidatDto)
    );
  }

  /**
   * Cette methode permet de recupurer tous les contrat
   * @return les contrats a ete trouvee dans l BD
   */
  findAllResponse(): __Observable<__StrictHttpResponse<ContratsDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/contrat/All`,
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
   * Cette methode permet de recupurer tous les contrat
   * @return les contrats a ete trouvee dans l BD
   */
  findAll(): __Observable<ContratsDto> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as ContratsDto)
    );
  }

  /**
   * Cette methode permet de supprimer un contrats par son ID
   * @return le contrat  a ete supprimer dans l BD
   */
  delete_1Response(idContrat?:number): __Observable<__StrictHttpResponse<ContratsDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/contrat/delete/${idContrat}`,
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
   * Cette methode permet de supprimer un contrats par son ID
   * @return le contrat  a ete supprimer dans l BD
   */
  delete_1(idContrat?:number): __Observable<ContratsDto> {
    return this.delete_1Response(idContrat).pipe(
      __map(_r => _r.body as ContratsDto)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modofier un entretien
   * @return l'entretien cree / modifie
   */
  save_1Response(): __Observable<__StrictHttpResponse<EntretienDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/entretien/create`,
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
   * Cette methode permet d'enregistrer ou modofier un entretien
   * @return l'entretien cree / modifie
   */
  save_1(): __Observable<EntretienDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as EntretienDto)
    );
  }

  /**
   * Cette methode permet de chercher les offres
   * @return les offres ont ete trouvee dans l BD
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<OffresDto[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/offre/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OffresDto[]>;
      })
    );
  }
  /**
   * Cette methode permet de chercher les offres
   * @return les offres ont ete trouvee dans l BD
   */
  findAll_1(): __Observable<OffresDto[]> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as OffresDto[])
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modofier une offre
   * @param body undefined
   * @return l'offre cree / modifie
   */
  save_2Response(body?:OffresDto): __Observable<__StrictHttpResponse<OffresDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/offre/createOffre`,
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
   * Cette methode permet d'enregistrer ou modofier une offre
   * @return l'offre cree / modifie
   */
  save_2(body?:OffresDto): __Observable<OffresDto> {
    return this.save_2Response(body).pipe(
      __map(_r => _r.body as OffresDto)
    );
  }

  /**
   * Cette methode permet chercher une offre par son ID
   * @return l'offre a ete trouvee dans l BD
   */
  findById_1Response(idOffre?:number): __Observable<__StrictHttpResponse<OffresDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/offre/${idOffre}`,
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
   * Cette methode permet chercher une offre par son ID
   * @return l'offre a ete trouvee dans l BD
   */
  findById_1(idOffre?:number): __Observable<OffresDto> {
    return this.findById_1Response(idOffre).pipe(
      __map(_r => _r.body as OffresDto)
    );
  }

  /**
   * Cette methode permet de chercher les recruteurs
   * @return les recruteurs ont ete trouvee dans l BD
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<RecruteurDto[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/recruteur/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruteurDto[]>;
      })
    );
  }
  /**
   * Cette methode permet de chercher les recruteurs
   * @return les recruteurs ont ete trouvee dans l BD
   */
  findAll_2(): __Observable<RecruteurDto[]> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as RecruteurDto[])
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modofier un recruteur
   * @return le recruteur cree / modifie
   */
  save_3Response(body?:RecruteurDto): __Observable<__StrictHttpResponse<RecruteurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/recruteur/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruteurDto>;
      })
    );
  }
  /**
   * Cette methode permet d'enregistrer ou modofier un recruteur
   * @return le recruteur cree / modifie
   */
  save_3(body?:RecruteurDto): __Observable<RecruteurDto> {
    return this.save_3Response(body).pipe(
      __map(_r => _r.body as RecruteurDto)
    );
  }

  /**
   * Cette methode permet de supprimer un recruteur par son ID
   * @return le recruteur  a ete supprimer dans l BDD
   */
  delete_2Response(idRecruteur?:number): __Observable<__StrictHttpResponse<RecruteurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/recruteur/delete/${idRecruteur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruteurDto>;
      })
    );
  }
  /**
   * Cette methode permet de supprimer un recruteur par son ID
   * @return le recruteur  a ete supprimer dans l BDD
   */
  delete_2(idRecruteur?:number): __Observable<RecruteurDto> {
    return this.delete_2Response(idRecruteur).pipe(
      __map(_r => _r.body as RecruteurDto)
    );
  }

  /**
   * Cette methode permet de chercher un recruteur par son ID dna l BDD
   * @return le recruteur a ete trouvee dans l BD
   */
  findById_2Response(idRecruteur?:number): __Observable<__StrictHttpResponse<RecruteurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/recruteur/${idRecruteur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RecruteurDto>;
      })
    );
  }
  /**
   * Cette methode permet de chercher un recruteur par son ID dna l BDD
   * @return le recruteur a ete trouvee dans l BD
   */
  findById_2(idRecruteur?:number): __Observable<RecruteurDto> {
    return this.findById_2Response(idRecruteur).pipe(
      __map(_r => _r.body as RecruteurDto)
    );
  }

  /**
   * Cette methode permet de chercher les article dans BDD
   * @return les candidats ont ete trouvee dans l BD
   */
  findAll_3Response(): __Observable<__StrictHttpResponse<Array<ServicesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/service/All`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServicesDto>>;
      })
    );
  }
  /**
   * Cette methode permet de chercher les article dans BDD
   * @return les candidats ont ete trouvee dans l BD
   */
  findAll_3(): __Observable<Array<ServicesDto>> {
    return this.findAll_3Response().pipe(
      __map(_r => _r.body as Array<ServicesDto>)
    );
  }

  /**
   * Cette methode permet d'enregistrer ou modofier un candidat
   * @return le candidat cree / modifie
   */
  save_4Response(body?:ServicesDto): __Observable<__StrictHttpResponse<ServicesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/systemrecrutement/v1/service/create`,
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
   * Cette methode permet d'enregistrer ou modofier un candidat
   * @return le candidat cree / modifie
   */
  save_4(body?:ServicesDto): __Observable<ServicesDto> {
    return this.save_4Response(body).pipe(
      __map(_r => _r.body as ServicesDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_4Response(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_4(): __Observable<Array<UtilisateurDto>> {
    return this.findAll_4Response().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }
  delete_3Response(idUtilisateur?:number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/systemrecrutement/v1/utilisateurs/delete/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
     /**
      * @param idUtilisateur undefined
   
   */
  }  delete_3(idUtilisateur?:number): __Observable<null> {
    return this.delete_3Response(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  findByEmailResponse(email?:String): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/utilisateurs/find/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param email
   * @return successful operation
   */
  findByEmail(email?:String): __Observable<UtilisateurDto> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @return successful operation
   */
  findById_3Response(idUtilisateur?:number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systemrecrutement/v1/utilisateurs/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_3(idUtilisateur?:number): __Observable<UtilisateurDto> {
    return this.findById_3Response(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module ApiService {
}

export { ApiService }
