import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurDto } from 'src/sr-api/src/models';
import { UserCandidatService } from 'src/app/service/userCandidat/user-candidat.service';

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboard-candidat.component.html',
  styleUrls: ['./dashboard-candidat.component.css']
})
export class DashboardCandidatComponent implements OnInit {

  connectedUser: UtilisateurDto = {};

  constructor(
    private router : Router ,
    private userService: UserCandidatService
    
    
    ) { }

    ngOnInit(): void {

      this.connectedUser = this.userService.getConnectedCandidat();
  
    }
  
  
    deconexion(){
      this.router.navigate(['']);
      localStorage.clear();
    }
  
    compte(){
      this.router.navigate(['/candidat/mon-profil']);  
    }
  }
  