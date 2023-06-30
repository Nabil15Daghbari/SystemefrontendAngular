import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Affectation0Service } from 'src/app/service/Affectation/affectation0.service';
import { ContratService } from 'src/app/service/contrat/contrat.service';
import { AffectationDto } from 'src/sr-api/src/models';

@Component({
  selector: 'app-attende',
  templateUrl: './attende.component.html',
  styleUrls: ['./attende.component.css']
})
export class AttendeComponent implements OnInit {
  listeAffectation:  Array<AffectationDto> = [];
 

  constructor(private affectationService: Affectation0Service) { }

  ngOnInit(): void {
    this.findAllAfffectation();
  }



  findAllAfffectation(): void {
    this.affectationService.findAll()
      .subscribe(res => {
       this.listeAffectation = res;
      });
  }



}