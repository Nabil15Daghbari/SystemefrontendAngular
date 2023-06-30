import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserrecruteurService } from '../userrecruteur/userrecruteur.service';

@Injectable({
  providedIn: 'root'
})  
export class RecruteurGuardService implements CanActivate{

  constructor(
   private userrecruteurService : UserrecruteurService 
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

   return this.userrecruteurService.isRecruteurLoggedAndAccessTokenValid();
 //  return true ;
  }
}
