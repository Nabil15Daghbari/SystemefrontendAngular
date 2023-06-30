import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from 'src/sr-api/src/models/changer-mot-de-passe-utilisateur-dto';
import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';
import { IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit {
  connectedUser: UtilisateurDto = {};
  imgUrl: string | ArrayBuffer = 'assets/images/profile.png';
  file: File | null = null;
  msg !: string;
  displaymsg!:string;
  title !:string;
  toast!: toastPayload;


  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = '';

  @ViewChild('nvMdp') nvMdp: any;
  @ViewChild('cnf') cnf: any;


  constructor(
    private router: Router,
    private userService: UserService ,
    private cs: NgToastService,
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }

  }


  cancel(): void {
    this.router.navigate(['/admin/Statistiques']);
  }


  changerMotDePasseUtilisateur() {
    this.msg ='info';
    if((this.nvMdp.nativeElement.value).length>0 && 
    (this.cnf.nativeElement.value).length>0 ){
      this.msg='success';
      this.displaymsg='Mot de passe changer avec Succès';
      this.title = 'Success';
      this.changerMotDePasseDto.id = this.userService.getConnectedUser().id;
      this.userService.changerMotDePasse(this.changerMotDePasseDto)
      .subscribe(data => {
        // rien faire
        this.router.navigate(['/admin/Statistiques']);
      });

    }else{
      this.msg='error';
      this.displaymsg='Veuillez vérifier les champs !';
      this.title ='Erreur';

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


  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }

}
