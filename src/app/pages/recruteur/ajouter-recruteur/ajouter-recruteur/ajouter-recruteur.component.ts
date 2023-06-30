import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { NgToastService, toastPayload } from 'src/app/service/services/ng-toast.service';

@Component({
  selector: 'app-ajouter-recruteur',
  templateUrl: './ajouter-recruteur.component.html',
  styleUrls: ['./ajouter-recruteur.component.css']
})
export class AjouterRecruteurComponent implements OnInit {

  toast!: toastPayload;

  constructor(private router: Router , private cs: NgToastService) { }

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
    this.router.navigate(['admin/Liste-Recruteur']);
  }

}
