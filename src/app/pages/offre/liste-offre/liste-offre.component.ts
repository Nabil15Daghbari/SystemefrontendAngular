import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { Offre0Service } from 'src/app/service/offre/offre0.service';
import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';
import { OffresDto } from 'src/sr-api/src/models/offres-dto';
import { RecruteurDto } from 'src/sr-api/src/models/recruteur-dto';
import { Offres } from 'src/sr-api/src/models/offres';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recruteur0Service } from 'src/app/service/recruteur/recruteur0.service';


@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {
  offreForm!: FormGroup;
  displayResponsive: boolean = false;
  editOffreDialogue: boolean = false;
  toast!: toastPayload;
 // offre :variable pour modfier offre
  offre: Offres = {};
// offreDto :variable pour enregester offre
  offreDto: OffresDto = {};
  recruteurDto: RecruteurDto = {};
  errorMsg: Array<string> = [];
  listOffres: Array<OffresDto> = [];
  listRecruteur: Array<RecruteurDto> = [];
  selectedOffreIdToDelete?= -1;
  msg !: string;
  displaymsg!:string;
  title !:string;
  formValue!: FormGroup; 
  @ViewChild('codeOffre') codeOffre: any;
  @ViewChild('poste') poste: any;
  @ViewChild('connaissances') connaissances: any;
  @ViewChild('niveauEtudes') niveauEtudes: any;
  @ViewChild('experience') experience: any;
  @ViewChild('criteres') criteres: any;
  @ViewChild('domaine') pays: any;
  @ViewChild('mission') mission: any;
  @ViewChild('langues') langues: any;
  @ViewChild('nbrARecruter') nbrARecruter: any;
  @ViewChild('cantrat') cantrat: any;
  @ViewChild('ville') ville: any;
  @ViewChild('salaire') salaire: any;
  @ViewChild('dateExpiration') dateExpiration: any;

  constructor(
    private cs: NgToastService,
    private offreService: Offre0Service,
    private formBuilder:FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serviceRecruteur : Recruteur0Service ,

  ) { }

  checking(){
    this.msg ='info';
    if((this.connaissances.nativeElement.value).length>0 && 
    (this.poste.nativeElement.value).length>0 && 
    (this.nbrARecruter.nativeElement.value).length>0  && 
    (this.salaire.nativeElement.value).length>0){
      this.msg='success';
      this.displaymsg='Offre ajouter avec Succès';
      this.title = 'Success';
      // traitement bd
      this.offreDto.recruteur = this.recruteurDto;
      this.offreService.enregistrerOffre(this.offreDto)
      .subscribe(res => {
        this.findAllOffres();
        this.errorMsg =[];
      }) ;

      // end traitement bd
      this.codeOffre.nativeElement.value='';
      this.poste.nativeElement.value='';
      this.connaissances.nativeElement.value='';
      this.niveauEtudes.nativeElement.value='';
      this.experience.nativeElement.value='';
      this.pays.nativeElement.value='';
      this.ville.nativeElement.value='';
      this.criteres.nativeElement.value='';
      this.mission.nativeElement.value='';
      this.langues.nativeElement.value='';
      this.nbrARecruter.nativeElement.value='';
      this.cantrat.nativeElement.value='';
      this.salaire.nativeElement.value='';
      this.dateExpiration.nativeElement.value='';
      this.displayResponsive = false ;
 
    }else{
      this.msg='error';
      this.displaymsg='Veuillez vérifier les champs !';
      this.title ='Erreur';
      this.displayResponsive = true ;
      
      this.offreService.enregistrerOffre(this.offreDto)
       .subscribe(res => {
        
       }, error => {
         this.errorMsg = error.error.errors;    
       });
    }
      return this.msg;
    }
  

    enregistrerOffre(type: string): void {
      this.toast = {
        message: this.displaymsg,
        title: this.title,
        type: type,
        ic: {
          timeOut: 2500,
          closeButton: true,
        } as IndividualConfig,
      };
      this.cs.showToast(this.toast);
    }

  
    checkingUpdate(){
      this.msg ='info';
    if((this.connaissances.nativeElement.value).length>0 && 
    (this.poste.nativeElement.value).length>0 && 
    (this.nbrARecruter.nativeElement.value).length>0  && 
    (this.salaire.nativeElement.value).length>0){
      this.msg='success';
      this.displaymsg='Offre modifier avec Succès';
      this.title = 'Success';
      // traitement bd
      this.offreService.enregistrerOffre(this.offreDto)
      .subscribe(res => {
        this.findAllOffres()
        this.router.navigate(['admin/Liste-Offre']);
        
      }) ;
      // end traitement bd
      
      this.editOffreDialogue = false ;
 
    }else{
      this.msg='error';
      this.displaymsg='Veuillez vérifier les champs !';
      this.title ='Erreur';
      this.editOffreDialogue = true ;
      
      this.offreService.enregistrerOffre(this.offreDto)
       .subscribe(res => {
        
       }, error => {
         this.errorMsg = error.error.errors;    
       });
    }
      return this.msg;
    }

    modifierOffre1(type: string): void {
      this.toast = {
        message: this.displaymsg,
        title: this.title,
        type: type,
        ic: {
          timeOut: 2500,
          closeButton: true,
        } as IndividualConfig,
      };
      this.cs.showToast(this.toast);
    }
    


    modifieroffre(id?: number) : void {
      this.router.navigate(['admin/Liste-Offre', id]);     
    }

    

  ngOnInit() {
    this.serviceRecruteur.findAllRecruteur()
    .subscribe(rec => {
      this.listRecruteur = rec;
    });

    const idOffre = this.activatedRoute.snapshot.params['idOffre'];
    if (idOffre) {
      this.offreService.findOffreById(idOffre)
      .subscribe(offre => {
        this.offreDto = offre;
      });
    }

    this.formValue = this.formBuilder.group({
      codeOffre:[''],
       poste:[''] ,
       connaissances:[''] ,
       niveauEtudes:[''] ,
       experience:[''] ,
       criteres:[''] ,
       domaine:[''] ,
       mission:[''] ,
       langues:[''] ,
       nbrARecruter:[''] ,
       cantrat:[''] ,
       ville:[''] ,
       salaire:[''] ,
       dateExpiration:[''] ,
      
    })
    this.findAllOffres();
}
  

showDialogeditOffre() {
  this.editOffreDialogue = true;
  }




  showResponsiveDialog() {
    this.displayResponsive = true
  };

  showeditOffreDialogue(){
    this.offreService.updateOffre();
    this.editOffreDialogue =true
  } ;


  findAllOffres(): void {
    this.offreService.findAll()
      .subscribe(res => {
       this.listOffres = res;
      });
  }


  confirmerEtSupprimerOffre(): void {
    if (this.selectedOffreIdToDelete !== -1) {
       this.offreService.deleteOffre(this.selectedOffreIdToDelete)
         .subscribe(res => {
           this.findAllOffres();
         }, error => {
           this.errorMsg = error.error.message;
         });
     }
   }

  selectOffrePourSupprimer(id?: number): void {
    this.selectedOffreIdToDelete = id;
  }
  annulerSuppressionOffre(): void {
    this.selectedOffreIdToDelete = -1;
  }



  annuler()  {
    this.router.navigate(['admin/Liste-Offre']);
     this.errorMsg =[];
     this.displayResponsive=false ;    
  }

}


