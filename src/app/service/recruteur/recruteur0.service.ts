import { Injectable } from '@angular/core';
import { RecruteurDto, UtilisateurDto } from 'src/sr-api/src/models';
import { ApiService } from 'src/sr-api/src/services';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Recruteur0Service {

  constructor(
    private apiService : ApiService
  ) { }


saveRecruteur(recruteurDto: RecruteurDto): Observable<RecruteurDto> {
    return this.apiService.save_3(recruteurDto);
  }

findAllRecruteur(): Observable<RecruteurDto[]>{
  return this.apiService.findAll_2() ;
}

findAllUtilisateur(): Observable<UtilisateurDto[]>{
  return this.apiService.findAll_4() ;
}



findRecruteurById(idRecruteur?:number): Observable<RecruteurDto>{
  if (idRecruteur) {
    return this.apiService.findById_2(idRecruteur);
  }
  return of();
}


deleteRecruteur(idRecruteur?: number): Observable<any> {
  if (idRecruteur) {
    return this.apiService.delete_2(idRecruteur);
  }
  return of();
}

}
