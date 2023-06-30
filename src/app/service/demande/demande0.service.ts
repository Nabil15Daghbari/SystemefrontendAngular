import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DemandesDto } from 'src/sr-api/src/models/demandes-dto';
import { DemandeService } from 'src/sr-api/src/services/demande.service';

@Injectable({
  providedIn: 'root'
})
export class Demande0Service {

  constructor(
    private demandeService0 : DemandeService ,
    private httpClient :HttpClient
  ) { }


  enregistrerDemande(demandeDto: DemandesDto): Observable<DemandesDto> {
    return this.demandeService0.save(demandeDto);
  }


  findAll(): Observable<DemandesDto[]> {
    return this.demandeService0.findAll() ;
   }


   
  deleteDemande(idDemande?: number): Observable<any> {
    if (idDemande) {
      return this.demandeService0.delete(idDemande);
    }
    return of();
  }


  findDemandeById(idDemande?: number): Observable<DemandesDto> { 
    if (idDemande) {
      return this.demandeService0.findById(idDemande);
    }
    return of();
  }


  findDemandeByIdOffre(idOffre?: number): Observable<DemandesDto[]>{
    if (idOffre) {
      return this.demandeService0.findAllDemandeByIdOffre(idOffre);
    }
    return of();
  }

  findDemandeByEtat(etat: string): Observable<DemandesDto[]> {
    if (etat) {
    return this.demandeService0.findDemandeByEtatDemande(etat);
  }
  return of();
}


findDemandeByCin(cin: string): Observable<DemandesDto> {
  if (cin) {
  return this.demandeService0.findDemandeByCin(cin);
}
return of();
}


NombreDemandeAdmis = (etat : string): Observable<any> =>{
    
  return this.httpClient.get<any>('http://localhost:8081/systemrecrutement/v1/demande/count/demandes/' + etat);
}


NombreDemandeByOffre = (idOffre : number): Observable<any> =>{
    
  return this.httpClient.get<any>('http://localhost:8081/systemrecrutement/v1/demande/count/nbr/offre/' + idOffre);
}

NombreDemandeByOffree = (): Observable<any> =>{
    
  return this.httpClient.get<any>('http://localhost:8081/systemrecrutement/v1/demande/nbr');
}  

}
