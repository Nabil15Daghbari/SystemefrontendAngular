import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from 'src/sr-api/src/services/photos.service';
import SavePhotoParams = PhotosService.SavePhotoParams;
import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';
import { IndividualConfig } from 'ngx-toastr';
import { EntrepriseService } from 'src/app/service/entreprise/entreprise.service';
import { EntrepriseDto } from 'src/sr-api/src/models/entreprise-dto';


@Component({
  selector: 'app-page-recruteur',
  templateUrl: './page-recruteur.component.html',
  styleUrls: ['./page-recruteur.component.css']
})
export class PageRecruteurComponent implements OnInit {

  errorMsg: Array<string> = [];
  displayResponsive: boolean = false;
  modifierRecruteurDialogue: boolean = false;
  selectedRecruteurIdToDelete?= -1;
  file: File | null = null;
  
  imgUrl: string | ArrayBuffer = 'assets/images/profile.png';
  msg !: string;
  displaymsg!: string;
  title !: string;
  toast!: toastPayload;
  entrepriseDto: EntrepriseDto = {};
  listEntreprise: Array<EntrepriseDto> = [];
  errorsMsg: Array<string> = [];


  @ViewChild('nom') nom: any;
  @ViewChild('codeFiscal') codeFiscal: any;
  @ViewChild('email') email: any;
  @ViewChild('adresse') adresse: any;
  @ViewChild('pays') pays: any;
  @ViewChild('ville') ville: any;
  @ViewChild('codePostale') codePostale: any;
  @ViewChild('numTel') numTel: any;
  @ViewChild('description') description: any;


  constructor(
    private cs: NgToastService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotosService,

    private entrepriseService: EntrepriseService,


  ) { }



  checking() {
    this.msg = 'info';
    if ((this.nom.nativeElement.value).length > 0
    ) {
      this.msg = 'success';
      this.displaymsg = 'Recruteur ajouter avec Succès';
      this.title = 'Success';
      // traitement bd
      debugger
      this.entrepriseService.sinscrire(this.entrepriseDto)
      .subscribe(rect => {
        this.savePhoto(rect.id, rect.nom);
        this.findAll();
      }, error => {
        this.errorMsg = error.error.errors;
      });
      // end traitement bd
      this.nom.nativeElement.value = '';
      this.codeFiscal.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.numTel.nativeElement.value = '';
      this.pays.nativeElement.value = '';
      this.ville.nativeElement.value = '';
      this.codePostale.nativeElement.value = '';
      this.description.nativeElement.value = '';

      this.displayResponsive = false;

    } else {
      this.msg = 'error';
      this.displaymsg = 'Veuillez vérifier les champs !';
      this.title = 'Erreur';
      this.displayResponsive = true;
      this.entrepriseService.sinscrire(this.entrepriseDto)
        .subscribe(res => {

        }, error => {
          this.errorMsg = error.error.errors;
        });


    }
    return this.msg;
  }


  enregistrerRecruteur(type: string): void {
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

    this.findAll();

    const idRecruteur = this.activatedRoute.snapshot.params['idRecruteur'];
    if (idRecruteur) {
      this.entrepriseService.findEntrepriseeById(idRecruteur)
        .subscribe(entreprise => {
          this.entrepriseDto = entreprise;
        });
    }



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

  savePhoto(idArticle?: number, titre?: string , entreprise?:string): void {
    if (idArticle && titre && this.file) {
      const params: SavePhotoParams = {
        id: idArticle,
        file: this.file,
        title: titre,
        context: 'entreprise'
      };
      this.photoService.savePhoto(params)
      .subscribe(res => {
        this.router.navigate(['articles']);
      });
    } else {
      this.router.navigate(['articles']);
    }
  }


  checkingUpdateRecruteur() {
    this.msg = 'info';
    if ((this.nom.nativeElement.value).length > 0) {
      this.msg = 'success';
      this.displaymsg = 'Recruteur modifier avec Succès';
      this.title = 'Success';
      // traitement bd
      this.entrepriseService.sinscrire(this.entrepriseDto)
        .subscribe(rect => {
          // this.savePhoto(rect.id, rect.nom );
          //this.savePhoto(rect.id, rect.nom );
          this.findAll();
          //this.router.navigate(['admin/Liste-Recruteur']); 
          this.router.navigate(['admin/Liste-Recruteur']);

        }
        );

      // end traitement bd

      this.modifierRecruteurDialogue = false;

    } else {
      this.msg = 'error';
      this.displaymsg = 'Veuillez vérifier les champs !';
      this.title = 'Erreur';
      this.modifierRecruteurDialogue = true;
      // this.entrepriseService.sinscrire(this.entrepriseDto)
      //  .subscribe(res => {

      //  }, error => {
      //    this.errorMsg = error.error.errors;    
      //  });


    }
    return this.msg;
  }



  modifierRecruteur1(type: string) {
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

  modifierRecruteur(id?: number): void {
    this.router.navigate(['admin/Liste-Recruteur', id]);
  }




  findAll(): void {
    this.entrepriseService.findAllEntreprise()
      .subscribe(res => {
        this.listEntreprise = res;
      });
  }


  confirmerEtSupprimerRecruteur(): void {
    if (this.selectedRecruteurIdToDelete !== -1) {
      this.entrepriseService.deleteEntreprise(this.selectedRecruteurIdToDelete)
        .subscribe(res => {
          this.findAll();
        }, error => {
          this.errorMsg = error.error.message;
        });
    }
  }

  selectRecruteurPourSupprimer(id?: number): void {
    this.selectedRecruteurIdToDelete = id;
  }
  annulerSuppressionRecruteur(): void {
    this.selectedRecruteurIdToDelete = -1;
  }




  editRecruteur() {

    this.displayResponsive = true;

  }

  showResponsiveDialog() {
    this.displayResponsive = true
  }

  showModifierRecruteurSialogue() {
    this.modifierRecruteurDialogue = true
  }

  annuler() {
    this.errorMsg= [];
    this.displayResponsive=false
  }

  annulerModif() {
    this.modifierRecruteurDialogue=false ;
    this.router.navigate(['/admin/Liste-Recruteur/']);
  }


}
