import { Component, OnInit } from '@angular/core';
import { Demande0Service } from 'src/app/service/demande/demande0.service';
import { DemandesDto } from 'src/sr-api/src/models';

@Component({
  selector: 'app-en-cours',
  templateUrl: './en-cours.component.html',
  styleUrls: ['./en-cours.component.css']
})
export class EnCoursComponent implements OnInit {

  searchedDemande:Array<DemandesDto> = [] ;
  errorMsg: Array<string> = [];
  etatDemande = '';

  constructor(
    private demandeService : Demande0Service ,

  ) { }

  ngOnInit(): void {
  }


  findDemandeByEtatDemande(etatDemande:string){
    if(etatDemande){
      this.demandeService.findDemandeByEtat(etatDemande)
      .subscribe(demande => {
        this.searchedDemande = demande;
      }, error => {
        this.errorMsg = error.error.message;
      });
    }
  }

  searchDemande() : void {
   this.findDemandeByEtatDemande(this.etatDemande)
  }







}
