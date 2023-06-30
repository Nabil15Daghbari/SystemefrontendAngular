import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserCandidatService } from '../userCandidat/user-candidat.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatGuardService implements CanActivate{

  constructor(
    private userCandidatService: UserCandidatService

  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userCandidatService.isCandidatLoggedAndAccessTokenValid();
 //  return true ;
  }
}
