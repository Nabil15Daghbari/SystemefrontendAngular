import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { EntrepriseService } from 'src/app/service/entreprise/entreprise.service';

import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';
import { UserCandidatService } from 'src/app/service/userCandidat/user-candidat.service';
import { AuthenticationRequest } from 'src/sr-api/src/models/authentication-request';
import { EntrepriseDto } from 'src/sr-api/src/models/entreprise-dto';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
  
  entrepriseDto: EntrepriseDto = {};
  errorsMsg: Array<string> = [];

  toast!: toastPayload;
  msg !: string;
  displaymsg!:string;
  title !:string;

   @ViewChild('nom') nom: any;
   @ViewChild('codefiscal') codefiscal: any;
   @ViewChild('email') email: any;
   @ViewChild('pays') pays: any;
   @ViewChild('ville') ville: any;
   @ViewChild('adresse') adresse: any;
   @ViewChild('codePostal') codePostal: any;
   @ViewChild('description') description: any;
   @ViewChild('tele') tele: any;


  constructor(
    private router: Router, private cs: NgToastService,
    private entrepriseService: EntrepriseService,
    private userCandidatService: UserCandidatService,
    

  ) { }

  ngOnInit(): void {
    
  }

  checking(){
  this.msg ='info';
  if( ((this.nom.nativeElement.value).length>0)
   && ((this.codefiscal.nativeElement.value).length>0)
   && ((this.email.nativeElement.value).length>0)
   && ((this.pays.nativeElement.value).length>0)
   && ((this.ville.nativeElement.value).length>0)
   && ((this.adresse.nativeElement.value).length>0)
   && ((this.codePostal.nativeElement.value).length>0)
   &&((this.description.nativeElement.value).length>0)
   &&((this.tele.nativeElement.value).length>0)){
    this.msg='success';
    this.displaymsg='Inscrit avec Succès';
    this.title = 'Success';
    // traitement bd
    this.entrepriseService.sinscrire(this.entrepriseDto)
  .subscribe(entrepriseDto => {
    this.connectEntrepriseCandidat();
    }, error => {
    this.errorsMsg = error.error.errors;
    });


    // end traitement bd
    // this.postal.nativeElement.value='';
     this.nom.nativeElement.value='';
     this.codefiscal.nativeElement.value='';
     this.email.nativeElement.value='';
     this.pays.nativeElement.value='';
     this.ville.nativeElement.value='';
     this.adresse.nativeElement.value='';
     this.codePostal.nativeElement.value='';
     this.description.nativeElement.value='';
     this.tele.nativeElement.value='';

  }else{
    this.msg='error';
    this.displaymsg='Veuillez vérifier les champs !';
    this.title ='Erreur';

    this.entrepriseService.sinscrire(this.entrepriseDto)
  .subscribe(entrepriseDto => {
    this.connectEntrepriseCandidat();
   }, error => {
    this.errorsMsg = error.error.errors;
    });


  }
    return this.msg;
  }

  inscription(type: string) {
    
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


// inscrire(): void {
//   this.entrepriseService.sinscrire(this.entrepriseDto)
//   .subscribe(entrepriseDto => {
//     this.connectEntreprise();
//   }, error => {
//     this.errorsMsg = error.error.errors;
//     });
// }

connectEntrepriseCandidat(): void {
  const authenticationRequest: AuthenticationRequest = {
    login: this.entrepriseDto.email,
    password: 'som3R@nd0mP@$$word'
  };
  this.userCandidatService.loginCandidat(authenticationRequest)
  .subscribe(response => {
    this.userCandidatService.setAccessTokenCandidat(response);
    this.getCandidatByEmail(authenticationRequest.login);
    localStorage.setItem('origin', 'inscription');
    this.router.navigate(['/candidat/mon-profil']);
  });
}

getCandidatByEmail(email?: string): void {
  this.userCandidatService.getCandidatByEmail(email)
  .subscribe(candidat => {
    this.userCandidatService.setConnectedCandidat(candidat);
  });
}


  

}
