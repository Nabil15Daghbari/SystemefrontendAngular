import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EntrepriseDto } from 'src/sr-api/src/models/entreprise-dto';
import { EntreprisesService } from 'src/sr-api/src/services/entreprises.service';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(
    private entreprisesService: EntreprisesService ,

  ) { }


  sinscrire(entreprise: EntrepriseDto): Observable<EntrepriseDto> {
    return this.entreprisesService.save(entreprise);
  }

  findAllEntreprise(): Observable<EntrepriseDto[]> {
    return this.entreprisesService.findAll() ;
   }

   deleteEntreprise(idEntreprise?: number): Observable<any> {
    if (idEntreprise) {
      return this.entreprisesService.delete(idEntreprise);
    }
    return of();
  }

  findEntrepriseeById(idEntreprise?: number): Observable<EntrepriseDto> {
    
    if (idEntreprise) {
      return this.entreprisesService.findById(idEntreprise);
    }
    return of();
  }





}
