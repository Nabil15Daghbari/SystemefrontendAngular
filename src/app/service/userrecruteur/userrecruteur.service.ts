import { Injectable } from '@angular/core';
import { UtilisateursService } from 'src/sr-api/src/services/utilisateurs.service';
import { AuthenticationService } from 'src/sr-api/src/services/authentication.service';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/sr-api/src/models/authentication-request';
import { Observable, of } from 'rxjs';
import { AuthenticationResponse } from 'src/sr-api/src/models/authentication-response';
import { ChangerMotDePasseUtilisateurDto} from 'src/sr-api/src/models/changer-mot-de-passe-utilisateur-dto';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';

@Injectable({
  providedIn: 'root'
})
export class UserrecruteurService {

  constructor(
    private authenticationServicerec: AuthenticationService,
    private utilisateurServicerec: UtilisateursService,
    private router: Router ,
  ) { }


  login(authenticationRequestrec: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationServicerec.authenticate(authenticationRequestrec);
  }



  getUserByEmail(email?: string): Observable<UtilisateurDto> {
    if (email !== undefined) {
      return this.utilisateurServicerec.findByEmail(email);
    }
    return of();
  }

  setAccessToken(authenticationResponserec: AuthenticationResponse): void {
    localStorage.setItem('accessTokenrec', JSON.stringify(authenticationResponserec));
  }

  setConnectedUser(utilisateurrec: UtilisateurDto): void {
    localStorage.setItem('connectedRec', JSON.stringify(utilisateurrec));
  }

  getConnectedUser(): UtilisateurDto {
    if (localStorage.getItem('connectedRec')) {
      return JSON.parse(localStorage.getItem('connectedRec') as string);
    }
    return {};
  }

  changerMotDePasse(changerMotDePasseDto: ChangerMotDePasseUtilisateurDto): Observable<ChangerMotDePasseUtilisateurDto> {
    return this.utilisateurServicerec.changerMotDePasse(changerMotDePasseDto);
  }

  
  isRecruteurLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('accessTokenrec')) {
      // TODO il faut verifier si le access token est valid
      return true;
    }
    this.router.navigate(['/login-Recruteur']);
    return false;
  }

}
