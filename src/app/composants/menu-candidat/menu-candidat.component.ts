import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Menu } from './menu';

@Component({
  selector: 'app-menu-candidat',
  templateUrl: './menu-candidat.component.html',
  styleUrls: ['./menu-candidat.component.css']
})
export class MenuCandidatComponent implements OnInit {

  private lastSelectedMenu: Menu | undefined;



  constructor(
    private router: Router ,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.toastr.info('Bonjour bienvenu dans l\'espace Candidat');
  }


  public menuProperties: Array<Menu> = [
   
    {
      id: '0' ,
      titre:'offre Actuelles', 
      icon :'zmdi zmdi-view-dashboard' ,
      url : '',
      sousMenu: [
        {
          id: '01',
          titre: 'offre Acutelles',
          icon: 'zmdi zmdi-view-list-alt',
          url: 'candidat/offre-actuelles'
        },
        // {
        //   id: '02',
        //   titre: 'Postuler',
        //   icon: 'zmdi zmdi-trending-up',
        //   url: 'candidat/postuler'
        // },
        {
          id: '02',
          titre: 'Mon Candidatures',
          icon: 'pi pi-briefcase ',
          url: 'candidat/candidatures'
        } 
        
      ]
    },
    {
      id: '1',
      titre: 'Mon compte',
      icon: 'zmdi zmdi-face',
      url: '',
      sousMenu: [
        {
          id: '11' ,
          titre:'Mon compte', 
          icon :'zmdi zmdi-account-circle' ,
          url : 'candidat/mon-profil' ,
        },
        // {
        //   id: '12' ,
        //   titre:'changer Mot de passe ', 
        //   icon :'zmdi zmdi-account-circle' ,
        //   url : 'candidat/changer-mot-de-passe ' ,
        // }
      ]
    }
   
 

] ;

   
    navigate(menu: Menu): void {
      if (this.lastSelectedMenu) {
        this.lastSelectedMenu.active = false;
      }
      menu.active = true;
      this.lastSelectedMenu = menu;
      this.router.navigate([menu.url]);
    }
  }
  


 

