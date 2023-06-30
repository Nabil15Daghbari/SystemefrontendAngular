import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCandidatService } from 'src/app/service/userCandidat/user-candidat.service';
import { AuthenticationRequest } from 'src/sr-api/src/models/authentication-request';

@Component({
  selector: 'app-page-login-candidat',
  templateUrl: './page-login-candidat.component.html',
  styleUrls: ['./page-login-candidat.component.css']
})
export class PageLoginCandidatComponent implements OnInit {
  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';


  constructor(
    private userService: UserCandidatService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

 

  login() {
    this.userService.loginCandidat(this.authenticationRequest).subscribe((data) => {
      this.userService.setAccessTokenCandidat(data);
      this.getUserByEmail();
      this.router.navigate(['/candidat/mon-profil']);
    }, error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
    });
  }



  getUserByEmail(): void {
    this.userService.getCandidatByEmail(this.authenticationRequest.login)
    .subscribe(user => {
      this.userService.setConnectedCandidat(user);
    });
  }


  retour(){
    this.router.navigate(['']);
  }


}
