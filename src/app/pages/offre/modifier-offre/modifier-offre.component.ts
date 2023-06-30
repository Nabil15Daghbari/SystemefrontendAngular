import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffresDto } from 'src/sr-api/src/models/offres-dto';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.css']
})
export class ModifierOffreComponent implements OnInit {

  offreDto: OffresDto = {};
  editOffreDialogue :boolean =false;


  constructor(private router: Router ) { }

  ngOnInit(): void {
  }


  cancel(): void {
    this.router.navigate(['admin/Liste-Offre']);
  }


     showeditOffreDialogue(){

     this.editOffreDialogue =true

   } ;

}
