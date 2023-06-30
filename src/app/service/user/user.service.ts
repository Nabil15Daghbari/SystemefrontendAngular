import { Injectable } from '@angular/core';
import { UtilisateursService } from 'src/sr-api/src/services/utilisateurs.service';
import { AuthenticationService } from 'src/sr-api/src/services/authentication.service';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/sr-api/src/models/authentication-response';
import { Observable , of } from 'rxjs';
import { AuthenticationRequest } from 'src/sr-api/src/models/authentication-request';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';
import { ChangerMotDePasseUtilisateurDto } from 'src/sr-api/src/models';
import { ApiService } from 'src/sr-api/src/services';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private utilisateurService: UtilisateursService,
    private router: Router ,
    private apiService : ApiService ,

  ) { }


 
  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
  }

  getUserByEmail(email?: string): Observable<UtilisateurDto> {
    if (email !== undefined) {
      return this.utilisateurService.findByEmail(email);
    }
    return of();
  }

  setAccessToken(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
  }

  setConnectedUser(utilisateur: UtilisateurDto): void {
    localStorage.setItem('connectedUser', JSON.stringify(utilisateur));
  }

  getConnectedUser(): UtilisateurDto {
    if (localStorage.getItem('connectedUser')) {
      return JSON.parse(localStorage.getItem('connectedUser') as string);
    }
    return {};
  }

  changerMotDePasse(changerMotDePasseDto: ChangerMotDePasseUtilisateurDto): Observable<ChangerMotDePasseUtilisateurDto> {
    return this.utilisateurService.changerMotDePasse(changerMotDePasseDto);
  }

  // findUtilisateurById(idUser?: number): Observable<UtilisateurDto>{
  //   if (idUser) {
  //     return this.apiService.findById_3(idUser);
  //   }
  //   return of();
  // }




  // TODO
  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('accessToken')) {
      // TODO il faut verifier si le access token est valid
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
