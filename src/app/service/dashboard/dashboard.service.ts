import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  OffresDto } from 'src/sr-api/src/models/offres-dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

   header : HttpHeaders;

  constructor(private httpClient :HttpClient) {
    this.header = new HttpHeaders();
   }


  NombreDemande = () =>{  
    return this.httpClient.get('/systemrecrutement/v1/offre/avg');
  }
}
