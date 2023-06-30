import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContratService } from 'src/app/service/contrat/contrat.service';
import { Demande0Service } from 'src/app/service/demande/demande0.service';
import { DemandesDto } from 'src/sr-api/src/models/demandes-dto';

@Component({
  selector: 'app-page-candidat',
  templateUrl: './page-candidat.component.html',
  styleUrls: ['./page-candidat.component.css']
})
export class PageCandidatComponent implements OnInit {
  listDemandeAdmis: Array<DemandesDto> = [];
  demandeDto: DemandesDto = {};
  listeDemande: DemandesDto = {};


  constructor(
    private demandeService: Demande0Service,
    private contratService :ContratService ,
    private toastr:ToastrService

  ) { }

  ngOnInit(): void {
    this.findDemandeByEtatDemande('ADMIS')
  
  }


  findDemandeByEtatDemande(etatDemande:string){
    if(etatDemande){
      this.demandeService.findDemandeByEtat(etatDemande)
      .subscribe(demande => {
           this.listDemandeAdmis = demande ;
      }, error => {
      });
    }
  }


  

  // findDemandeByCin(cin: string) {

  //   if(cin){
  //     this.demandeService.findDemandeByCin(cin)
  //     .subscribe(demande => {
  //          this.demandeDto = demande ;
          
  //          console.log(this.demandeDto)
  //     }, error => {
  //     });
  //   }
  // }
    

  // printerReportt(){
  //   try {
  //       this.contratService.getReportFacture('Blank_A4', this.listeDemande.cin)
  //       .subscribe(data=>{
  //         let file = new Blob([data], { type: 'application/pdf' });            
  //         var fileURL = URL.createObjectURL(file);
  //         window.open(fileURL);
  //       });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  

  selectedDemandeById?= -1;


  findDemandeById(id?: number) {
    this.selectedDemandeById = id
    this.demandeService.findDemandeById(this.selectedDemandeById)
      .subscribe(res => {
        this.demandeDto = res;
        console.log(this.demandeDto)

       
          if(this.demandeDto===null){
            this.toastr.warning("Selectionner un employee svp!","alert")
          }else{
            this.toastr.success("le Contrat est générée avec succés","alert")
        this.contratService.getReportFacture('Blank_A4', this.demandeDto.cin)
        .subscribe(data=>{
          let file = new Blob([data], { type: 'application/pdf' });            
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        });

      } 



      });
      
      
   }


}
