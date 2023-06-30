import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AffectationDto } from 'src/sr-api/src/models';
import { AffectationService } from 'src/sr-api/src/services/affectation.service';

@Injectable({
  providedIn: 'root'
})
export class Affectation0Service {

  constructor(
    private affectation : AffectationService
  ) { }


  enregistrerAffectation(AffectationDto: AffectationDto): Observable<AffectationDto> {
    return this.affectation.save(AffectationDto);
  }

  findAll(): Observable<AffectationDto[]> {
    return this.affectation.findAll() ;
   }

}
