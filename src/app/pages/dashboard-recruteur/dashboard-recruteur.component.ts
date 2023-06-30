import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserrecruteurService } from 'src/app/service/userrecruteur/userrecruteur.service';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-dashboard-recruteur',
  templateUrl: './dashboard-recruteur.component.html',
  styleUrls: ['./dashboard-recruteur.component.css']
})
export class DashboardRecruteurComponent implements OnInit {

  connectedRecruteur: UtilisateurDto = {};
  constructor(
    private userrecruteurService : UserrecruteurService ,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.connectedRecruteur = this.userrecruteurService.getConnectedUser();
  }


  deconexion(){
    this.router.navigate(['']);
    localStorage.clear();
  }   

  compte(){
    this.router.navigate(['/recruteur/mon-profil']);  
  }

}
