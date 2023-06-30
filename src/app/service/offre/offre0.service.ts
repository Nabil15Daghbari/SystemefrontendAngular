import { Injectable } from '@angular/core';
import { OffresDto } from 'src/sr-api/src/models/offres-dto';
import {map, Observable, of} from 'rxjs';
import { ApiService, OffreService } from 'src/sr-api/src/services';
import { Offres } from 'src/sr-api/src/models';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class Offre0Service {

  constructor(
    private offreService : OffreService ,
    private apiService : ApiService ,
    private _http:HttpClient ,
    private userService : UserService ,
    private httpClient :HttpClient
  ) { }



  findAll(): Observable<OffresDto[]> {
    return this.apiService.findAll_1() ;
   }

  enregistrerOffre(offresDto: OffresDto): Observable<OffresDto> {
   // offresDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.apiService.save_2(offresDto);
  }


  updateOffre(idOffre?: number , offre?: Offres) {
    {
      return this._http.put<any>("/systemrecrutement/v1/offre/update/" + idOffre,offre).pipe(map((res:any)=> {
        return res
      }))
    }
  }

 
  findOffreById(idOffre?: number): Observable<OffresDto> {
    
    if (idOffre) {
      return this.apiService.findById_1(idOffre);
    }
    return of();
  }


  deleteOffre(idOffre?: number): Observable<any> {
    if (idOffre) {
      return this.offreService.delete(idOffre);
    }
    return of();
  }


  CalculerMoyenSalaire = (): Observable<any> =>{
    
    return this.httpClient.get<any>('http://localhost:8081/systemrecrutement/v1/offre/avg');
  }



   
}
