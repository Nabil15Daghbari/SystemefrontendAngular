import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { NgToastService, toastPayload   } from 'src/app/service/services/ng-toast.service';
import { OffresDto } from 'src/sr-api/src/models/offres-dto';


@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent implements OnInit {

  toast!: toastPayload;

  offreDto: OffresDto = {};
  errorMsg: Array<string> = [];

 
  constructor(  private router: Router , 
    private cs: NgToastService ,
    ) { }

  ngOnInit(): void {
    
  }

  buttonClick(type: string) {
    this.toast = {
      message: 'offre ajouter avec seccués',
      title: 'succés',
      type: type,
      ic: {
        timeOut: 2500,
        closeButton: true,
      } as IndividualConfig,
    };
    this.cs.showToast(this.toast);
  }

  cancel(): void {
    this.router.navigate(['admin/Liste-Offre']);
  }




  
 



}
