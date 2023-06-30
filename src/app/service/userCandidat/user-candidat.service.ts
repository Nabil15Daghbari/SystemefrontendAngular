import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateursService } from 'src/sr-api/src/services/utilisateurs.service';
import { AuthenticationService } from 'src/sr-api/src/services/authentication.service';
import { AuthenticationResponse } from 'src/sr-api/src/models/authentication-response';
import { AuthenticationRequest } from 'src/sr-api/src/models/authentication-request';
import { Observable, of } from 'rxjs';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from 'src/sr-api/src/models/changer-mot-de-passe-utilisateur-dto';

@Injectable({
  providedIn: 'root'
})
export class UserCandidatService {

  constructor(
    private authenticationServiceCandidat: AuthenticationService,
    private utilisateurServiceCandidat: UtilisateursService,
    private router: Router ,


  ) { }


  loginCandidat(authenticationRequestCandidat: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationServiceCandidat.authenticate(authenticationRequestCandidat);
  }



  getCandidatByEmail(email?: string): Observable<UtilisateurDto> {
    if (email !== undefined) {
      return this.utilisateurServiceCandidat.findByEmail(email);
    }
    return of();
  }


  setAccessTokenCandidat(authenticationResponseCandidat: AuthenticationResponse): void {
    localStorage.setItem('accessTokenCandidat', JSON.stringify(authenticationResponseCandidat));
  }

  setConnectedCandidat(utilisateurCandidat: UtilisateurDto): void {
    localStorage.setItem('connectedCandidat', JSON.stringify(utilisateurCandidat));
  }

  getConnectedCandidat(): UtilisateurDto {
    if (localStorage.getItem('connectedCandidat')) {
      return JSON.parse(localStorage.getItem('connectedCandidat') as string);
    }
    return {};
  }


  changerMotDePasseCandidat(changerMotDePasseDto: ChangerMotDePasseUtilisateurDto): Observable<ChangerMotDePasseUtilisateurDto> {
    return this.utilisateurServiceCandidat.changerMotDePasse(changerMotDePasseDto);
  }


  isCandidatLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('accessTokenCandidat')) {
      // TODO il faut verifier si le access token est valid
      return true;
    }
    this.router.navigate(['login-Candidat']);
    return false;
  }
}
