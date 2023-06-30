import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserrecruteurService } from 'src/app/service/userrecruteur/userrecruteur.service';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from 'src/sr-api/src/models/changer-mot-de-passe-utilisateur-dto';

@Component({
  selector: 'app-profil-recruteur',
  templateUrl: './profil-recruteur.component.html',
  styleUrls: ['./profil-recruteur.component.css']
})
export class ProfilRecruteurComponent implements OnInit {
  connectedRecruteur: UtilisateurDto = {};
  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = '';


  constructor(
    private userrecruteurService : UserrecruteurService ,
    private router : Router
  ) { }
  ngOnInit(): void {
    this.connectedRecruteur = this.userrecruteurService.getConnectedUser();
    if (localStorage.getItem('originRec') && localStorage.getItem('originRec') === 'inscriptionRec') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('originRec');
    }
  }


  cancel(): void {
    this.router.navigate(['/recruteur']);
  }


  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userrecruteurService.getConnectedUser().id;
    this.userrecruteurService.changerMotDePasse(this.changerMotDePasseDto)
    .subscribe(data => {
      // rien faire
      this.router.navigate(['/recruteur']);
    });
  }

}
