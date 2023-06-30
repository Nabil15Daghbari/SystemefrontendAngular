import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { Service0Service } from 'src/app/service/serv/service0.service';
import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';
import { ServicesDto } from 'src/sr-api/src/models/services-dto';

@Component({
  selector: 'app-liste-services',
  templateUrl: './liste-services.component.html',
  styleUrls: ['./liste-services.component.css']
})
export class ListeServicesComponent implements OnInit {
  addServiceDialoque :boolean = false;
  edidtserviceDialogue :boolean = false  ;
  serviceDto :ServicesDto = {} ;
  errorMsg: Array<string> = [];
  selectedServiceIdToDelete ? = -1;
  listServices: Array<ServicesDto> = [];
  msg !: string;
  displaymsg!:string;
  title !:string;
  toast!: toastPayload;


  @ViewChild('nomServices') nomServices: any;


    constructor(
              private cs: NgToastService,
              private router: Router ,
              private service0Service : Service0Service
    ) {}

   

  ngOnInit(): void {
    this.findAllServices() ; 
  }





  checking(){
    this.msg ='info';
    if((this.nomServices.nativeElement.value).length>0 ){
      this.msg='success';
      this.displaymsg='Service ajouter avec Succès';
      this.title = 'Success';
      // traitement bd
      this.service0Service.enregistreServices(this.serviceDto)
      .subscribe(res => {
        this.findAllServices();
      });
      // end traitement bd
      this.nomServices.nativeElement.value='';

      this.addServiceDialoque = false ;

      
    }else{
      this.msg='error';
      this.displaymsg='Veuillez vérifier les champs !';
      this.title ='Erreur';

      this.addServiceDialoque = true ;

    }
      return this.msg;
    }

    enregistrerService(type: string): void {
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


  confirmerEtSupprimerService(): void {
    if (this.selectedServiceIdToDelete !== -1) {
      this.service0Service.delete(this.selectedServiceIdToDelete)
      .subscribe(res => {
        this.findAllServices();
      }, error => {
        this.errorMsg = error.error.message;
      });
    }
  }
  annulerSuppressionService(): void {
    this.selectedServiceIdToDelete = -1;
  }
  selectServicePourSupprimer(id?: number): void {
    this.selectedServiceIdToDelete = id;
  }


  findAllServices(): void {
    this.service0Service.findAll()
    .subscribe(res => {
      this.listServices = res;
    });
  }


  showResponsiveDialog(){

    this.addServiceDialoque =true

  } ;

  showedidtserviceDialogue(){

    this.edidtserviceDialogue =true

  } ;




  editService() : void{
   
    this.edidtserviceDialogue =true
  
  }




  

 
 
}
