import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserrecruteurService } from 'src/app/service/userrecruteur/userrecruteur.service';
import { AuthenticationRequest } from 'src/sr-api/src/models/authentication-request';

@Component({
  selector: 'app-page-login-rec',
  templateUrl: './page-login-rec.component.html',
  styleUrls: ['./page-login-rec.component.css']
})
export class PageLoginRecComponent implements OnInit {
  authenticationRequestrec: AuthenticationRequest = {};
  errorMessage = '';
  connectedRec = '';
  constructor(
    private recruteurService: UserrecruteurService,
    private router: Router ,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }


  login() {
      this.recruteurService.login(this.authenticationRequestrec).subscribe((data) => {
      this.recruteurService.setAccessToken(data);
      this.getUserByEmail();
      this.router.navigate(['/recruteur/mon-profil']);
    }, error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
    });
  }



  getUserByEmail(): void {
    this.recruteurService.getUserByEmail(this.authenticationRequestrec.login)
    .subscribe(user => {
      this.recruteurService.setConnectedUser(user);
     
    });
  }


  retour(){
    this.router.navigate(['']);

  }


  // cancelClick(): void {
  //   if (this.activatedRoute.snapshot.params['/login-Recruteur'] ) {
  //     this.router.navigate(['/recruteur']);
  //   } else if (this.origin === 'fournisseur') {
  //     this.router.navigate(['fournisseurs']);
  //   }
  // }


}
