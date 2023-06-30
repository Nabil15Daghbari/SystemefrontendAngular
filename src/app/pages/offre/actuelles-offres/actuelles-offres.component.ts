import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { ContratService } from 'src/app/service/contrat/contrat.service';
import { Demande0Service } from 'src/app/service/demande/demande0.service';
import { Offre0Service } from 'src/app/service/offre/offre0.service';
import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';
import { DemandesDto } from 'src/sr-api/src/models/demandes-dto';
import { OffresDto } from 'src/sr-api/src/models/offres-dto';

@Component({
  selector: 'app-actuelles-offres',
  templateUrl: './actuelles-offres.component.html',
  styleUrls: ['./actuelles-offres.component.css']
})
export class ActuellesOffresComponent implements OnInit {

  displayResponsive: boolean = false;
  toast!: toastPayload;

  imgUrl: string | ArrayBuffer = 'assets/images/profile.png';
  file: File | null = null;

  listOffres: Array<OffresDto> = [];

  offreDto: OffresDto = {};

  demandeDto: DemandesDto = {};

  errorMsg: Array<string> = [];

  msg !: string;
  displaymsg!: string;
  title !: string;




  public imagePath: any;
  imgURL: any;
  public message!: string;
  userFile!: any[];

  //  upload lettre motivation
  public imagePathLettre: any;
  imgURLLettre: any;
  public messageLettre!: string;
  userFileLettre!: any[];

 // upload diplome 
  public imagePathDiplome: any;
  imgURLDiplome: any;
  public messageDiplome!: string;
  userFileDiplome!: any[];



  @ViewChild('cin') cin: any;
  @ViewChild('nom') nom: any;
  @ViewChild('prenom') prenom: any;
  @ViewChild('email') email: any;
  @ViewChild('poste') poste: any;
  @ViewChild('adresse') adresse: any;
  @ViewChild('tele') tele: any;
  @ViewChild('dateDemande') dateDemande: any;

  constructor(
    private cs: NgToastService,
    private router: Router,
    private offreService: Offre0Service,
    private demandeService: Demande0Service,
    private activatedRoute: ActivatedRoute,
    private contraService: ContratService


  ) { }

  ngOnInit(): void {
    const idOffre = this.activatedRoute.snapshot.params['idOffre'];
    if (idOffre) {
      this.offreService.findOffreById(idOffre)
        .subscribe(offre => {
          this.offreDto = offre;
        });
    }


    this.findAllOffres();
  }

  checking() {
    this.msg = 'info';
    if ((this.dateDemande.nativeElement.value).length > 0) {
      this.msg = 'success';
      this.displaymsg = 'Demande ajouter avec Succès';
      this.title = 'Success';
      // traitement bd
      this.uploadFile();
      this.uploadLettre() ;
      this.uploadDiplome() ;
    //  this.uploadDiplome() ;



      this.demandeDto.offre = this.offreDto;
      this.demandeService.enregistrerDemande(this.demandeDto)
        .subscribe(art => {
          this.router.navigate(['candidat/candidatures']);
        }, error => {
          this.errorMsg = error.error.errors;
        });

      // end traitement bd
      this.cin.nativeElement.value = '';
      this.poste.nativeElement.value = '';
      this.nom.nativeElement.value = '';
      this.prenom.nativeElement.value = '';
      this.email.nativeElement.value = '';
      this.adresse.nativeElement.value = '';
      this.tele.nativeElement.value = '';
      this.dateDemande.nativeElement.value = '';
      this.displayResponsive = false;


    } else {
      this.msg = 'error';
      this.displaymsg = 'Veuillez vérifier les champs !';
      this.title = 'Erreur';
      this.displayResponsive = true;

      // this.demandeService.enregistrerDemande(this.demandeDto)
      //   .subscribe(art => {

      //   }, error => {
      //     this.errorMsg = error.error.errors;
      //   });
    }
    return this.msg;
  }


  enregistrerDemande(type: string): void {
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




  selectOffrePourPostuler(id?: number): void {
    this.router.navigate(['candidat/offre-actuelles', id]);
  }


  annuler(): void {
    this.displayResponsive = false
    this.router.navigate(['candidat/offre-actuelles']);
  }

  // enregistrerDemande(): void {
  //   this.demandeService.enregistrerDemande(this.demandeDto)
  //   .subscribe(art => {

  //   }, error => {
  //     this.errorMsg = error.error.errors;
  //   });
  // }




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

  showResponsiveDialog() {

    this.displayResponsive = true

  }

  findAllOffres(): void {
    this.offreService.findAll()
      .subscribe(res => {
        this.listOffres = res;
      })
  }






  //  upload file 

  public uploadResult?: any;

  async uploadFile() {
    console.log(this.userFile)
    try {
      this.contraService.uploadFile(this.userFile)
        .subscribe(result => {
          console.log(result);
        },
          error => {
            console.error(error);
          })
    } catch (error) {
      console.warn("File upload failed.");
      console.error(error);
    }
  }



  


  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      console.log(this.userFile)
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }


  }


  // upload lettre motivation
  async uploadLettre() {
    console.log(this.userFileLettre)
    try {
      this.contraService.uploadFile(this.userFileLettre)
        .subscribe(result => {
          console.log(result);
        },
          error => {
            console.error(error);
          })
    } catch (error) {
      console.warn("File upload failed.");
      console.error(error);
    }
  }


  onSelectFileLettre(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFileLettre = file;
      console.log(this.userFileLettre)
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.messageLettre = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePathLettre = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURLLettre = reader.result;
      }
    }


  }





  // upload Diplome
  async uploadDiplome() {
    console.log(this.userFileDiplome)
    try {
      this.contraService.uploadFile(this.userFileDiplome)
        .subscribe(result => {
          console.log(result);
        },
          error => {
            console.error(error);
          })
    } catch (error) {
      console.warn("File upload failed.");
      console.error(error);
    }
  }


  onSelectFileDiplome(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFileDiplome = file;
      console.log(this.userFileDiplome)
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.messageDiplome = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePathDiplome = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURLDiplome = reader.result;
      }
    }


  }




}
