import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-recruteur',
  templateUrl: './detail-recruteur.component.html',
  styleUrls: ['./detail-recruteur.component.css']
})
export class DetailRecruteurComponent implements OnInit {

  displayResponsive :boolean =false;




  constructor() { }

  ngOnInit(): void {
  }


  


  editRecruteur(){

    this.displayResponsive= true ;

  }



}
