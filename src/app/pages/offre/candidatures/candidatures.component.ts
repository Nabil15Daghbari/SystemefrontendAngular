import { Component, OnInit } from '@angular/core';
import { Demande0Service } from 'src/app/service/demande/demande0.service';
import { DemandesDto } from 'src/sr-api/src/models/demandes-dto';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  demandeDto :DemandesDto = {} ;
  listDemande: Array<DemandesDto> = [];
  selectedDemandeIdToDelete?= -1;
  errorMsg: Array<string> = [];


  constructor(
    private demandeService : Demande0Service ,

  ) { }

  ngOnInit(): void {
    this.findAllDemande();
  }

  findAllDemande(): void {
    this.demandeService.findAll()
      .subscribe(res => {
       this.listDemande = res;
      });
  }




  confirmerEtSupprimerDemande(): void {
    if (this.selectedDemandeIdToDelete !== -1) {
       this.demandeService.deleteDemande(this.selectedDemandeIdToDelete)
         .subscribe(res => {
           this.findAllDemande();
         }, error => {
           this.errorMsg = error.error.message;
         });
     }
   }

  selectDemandePourSupprimer(id?: number): void {
    this.selectedDemandeIdToDelete = id;
  }
  annulerSuppressionDemande(): void {
    this.selectedDemandeIdToDelete = -1;
  }



}
