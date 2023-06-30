import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualConfig } from 'ngx-toastr';
import { NgToastService, toastPayload   } from 'src/app/service/services/ng-toast.service';

@Component({
  selector: 'app-offres-actuelles',
  templateUrl: './offres-actuelles.component.html',
  styleUrls: ['./offres-actuelles.component.css']
})
export class OffresActuellesComponent implements OnInit {

  toast!: toastPayload;
  displayResponsive :boolean =false;



  constructor(private router: Router  ,private cs: NgToastService) { }


  buttonClick(type: string) {
    this.toast = {
      message: 'Postuler avec seccués',
      title: 'succés',
      type: type,
      ic: {
        timeOut: 2500,
        closeButton: true,
      } as IndividualConfig,
    };
    this.cs.showToast(this.toast);
  }




  ngOnInit(): void {

 
  }


  showResponsiveDialog(){

    this.displayResponsive =true

  } ;

}
