import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { Affectation0Service } from 'src/app/service/Affectation/affectation0.service';
import { Demande0Service } from 'src/app/service/demande/demande0.service';
import { Offre0Service } from 'src/app/service/offre/offre0.service';
import { Service0Service } from 'src/app/service/serv/service0.service';
import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';
import { AffectationDto, DemandesDto, ServicesDto } from 'src/sr-api/src/models';
import { OffresDto } from 'src/sr-api/src/models/offres-dto';
import { DemandeService } from 'src/sr-api/src/services/demande.service';
import UpdateEtatDemandeParams = DemandeService.UpdateEtatDemandeParams;


@Component({
  selector: 'app-lister-offres',
  templateUrl: './lister-offres.component.html',
  styleUrls: ['./lister-offres.component.css']
})
export class ListerOffresComponent implements OnInit {

  displayResponsive: boolean = false;
  displayResponsive1: boolean = false;
  changerEtat: boolean = false;
  affectation: boolean = false;

  listOffres: Array<OffresDto> = [];
  selectedOffreById?= -1;

  selectedDemande?= -1;

  offreDto: OffresDto | undefined;
  serviceDto :ServicesDto = {} ;
  listServices: Array<ServicesDto> = [];


  demandeDto: DemandesDto = {};
  AffectationDto: AffectationDto = {};
  listeDemande: Array<DemandesDto> = [];
  selectedDemandeByIdOffre?= -1;
  msg !: string;
  displaymsg!: string;
  title !: string;
  toast!: toastPayload;

  @ViewChild('etat') etat: any;
  @ViewChild('dateExpiration') dateExpiration: any;


  constructor(
    private offreService: Offre0Service,
    private demandeService: Demande0Service,
    private DemandeService: DemandeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cs: NgToastService,
    private service0Service : Service0Service , 
    private affectationService :Affectation0Service

  ) { }


  findAllServices(): void {
    this.service0Service.findAll()
    .subscribe(res => {
      this.listServices = res;
    }); 
  }

  selectionnerDemande(idDemande?: number) {
    this.selectedDemande = idDemande
    this.demandeService.findDemandeById(this.selectedDemande)
      .subscribe(res => {
        this.demandeDto = res;
      });
  }


  // modifierEtatDemande(id?: number) : void {
  //  // this.displayResponsive =false 
  //      this.changerEtat = true ;
  //      this.displayResponsive =true ;
  //      this.router.navigate(['recruteur/lister-offres', id]);  

  // }


  checkingUpdateDemande() {
    this.msg = 'info';
    if ((this.etat.nativeElement.value).length > 0) {
      this.msg = 'success';
      this.displaymsg = 'Etat demande modifier avec Succès';
      this.title = 'Success';
      // traitement bd
      this.demandeService.enregistrerDemande(this.demandeDto)
        .subscribe(res => {
          this.findAllDemandeByIdOffre()
          this.router.navigate(['recruteur/lister-offres']);
        });
      // end traitement bd

      this.changerEtat = false;

    } else {
      this.msg = 'error';
      this.displaymsg = 'Veuillez vérifier les champs !';
      this.title = 'Erreur';
      this.changerEtat = true;
    }
    return this.msg;
  }

  modifierDemande(type: string): void {
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



  ngOnInit(): void {
    this.findAllOffres();
    this.findAllServices();

    const idDem = this.activatedRoute.snapshot.params['idDem'];
    if (idDem) {
      this.demandeService.findDemandeById(idDem)
      .subscribe(demande => {
        this.demandeDto = demande;
      });
    }

  }

  changerEtatDemande() {
    this.changerEtat = true;
  }





  showResponsiveDialog() {
    this.displayResponsive = true
  };


  showResponsiveDialog1() {

    this.displayResponsive1 = true

  };

  getOffreByID(id?: number) {
    this.selectedOffreById = id;
    this.offreService.findOffreById(this.selectedOffreById)
      .subscribe(res => {
        this.offreDto = res;
      }, error => {

      });
  }


  findAllDemandeByIdOffre(idOffre?: number) {
    this.selectedDemandeByIdOffre = idOffre
    this.demandeService.findDemandeByIdOffre(this.selectedDemandeByIdOffre)
      .subscribe(res => {
        this.listeDemande = res;
      });
  }




  findAllOffres(): void {
    this.offreService.findAll()
      .subscribe(res => {
        this.listOffres = res;
      })
  }


  checkingSaveAffectation() {
    this.msg = 'info';
    if ((this.dateExpiration.nativeElement.value).length > 0) {
      this.msg = 'success';
      this.displaymsg = 'Affectation ajouter avec Succès';
      this.title = 'Success';
      
      // traitement bd
      this.AffectationDto.demandes =this.demandeDto ;
      this.affectationService.enregistrerAffectation(this.AffectationDto)
        .subscribe(res => {
         
          
        });
      // end traitement bd

      this.affectation=false ;

    } else {
      this.msg = 'error';
      this.displaymsg = 'Veuillez vérifier les champs !';
      this.title = 'Erreur';
      this.affectation=true ;
        }
    return this.msg;
  }

  SaveAffectation(type: string): void {
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



// fi button affectation

  AffectationService(){
    this.affectation=true ;
  
   }

  selectDemandePourAffectation(id?: number): void {
    
    this.router.navigate(['recruteur/lister-offres' , id]);
    this.displayResponsive =false ;
    this.affectation=true ;

  } 

  annuler(){
    this.affectation=false ;
    this.router.navigate(['recruteur/lister-offres']);
  }

}
