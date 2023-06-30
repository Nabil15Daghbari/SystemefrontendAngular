import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangerMotDePasseUtilisateurDto } from 'src/sr-api/src/models/changer-mot-de-passe-utilisateur-dto';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';
import { UserCandidatService } from 'src/app/service/userCandidat/user-candidat.service';


@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  connectedCandidat: UtilisateurDto = {};
  changerMotDePasseDto: ChangerMotDePasseUtilisateurDto = {};
  ancienMotDePasse = '';
  constructor(
    private userCandidatService: UserCandidatService ,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.connectedCandidat = this.userCandidatService.getConnectedCandidat();
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }


  cancel(): void {
    this.router.navigate(['/candidat']);
  }


  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasseDto.id = this.userCandidatService.getConnectedCandidat().id;
    this.userCandidatService.changerMotDePasseCandidat(this.changerMotDePasseDto)
    .subscribe(data => {
      // rien faire
      this.router.navigate(['/candidat/offre-actuelles']);
    });
  }

}
