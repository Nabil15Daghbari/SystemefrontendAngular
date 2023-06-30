import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Menu } from './menu';

@Component({
  selector: 'app-menu-recruteur',
  templateUrl: './menu-recruteur.component.html',
  styleUrls: ['./menu-recruteur.component.css']
})
export class MenuRecruteurComponent implements OnInit {

  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router ,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.toastr.info('Bonjour bienvenu dans l\'espace Recruteur');
  } 


  public menuProperties: Array<Menu> = [
   
    {
      id: '0' ,
      titre:'Gestion Des Offres', 
      icon :'zmdi zmdi-view-dashboard' ,
      url : '',
      sousMenu: [
       
       
       
        {
          id: '01',
          titre: 'Liste offres',
          icon: 'zmdi zmdi-trending-up',
          url: 'recruteur/lister-offres'
        },
        // {
        //   id: '02',
        //   titre: 'Calander',
        //   icon: 'pi pi-calendar',
        //   url: 'recruteur/Calender'
        // }
         
        
      ]
    },
    {
      id: '1' ,
      titre:'Gestion Des Demandes', 
      icon :'zmdi zmdi-view-dashboard' ,
      url : '',
      sousMenu: [
       
       
       
        {
          id: '11',
          titre: 'Filtrer Le Demande ',
          icon: 'zmdi zmdi-trending-up',
          url: 'recruteur/Filtrer-Le-Demande'
        },
        {
          id: '12',
          titre: ' Affectation',
          icon: 'pi pi-calendar',
          url: 'recruteur/demande-En-Attende'
        },
        // {
        //   id: '13',
        //   titre: ' Entretien',
        //   icon: 'pi pi-calendar',
        //   url: 'recruteur/demande-Convoquer-En-Entretien'
        // },
        
        // {
        //   id: '14',
        //   titre: 'Admis',
        //   icon: 'pi pi-calendar',
        //   url: 'recruteur/demande-Admis'
        // }
         
        
      ]
    },
    {
      id: '2',
      titre: 'Mon compte',
      icon: 'zmdi zmdi-face',
      url: '',
      sousMenu: [
        {
          id: '21' ,
          titre:'Mon compte', 
          icon :'zmdi zmdi-account-circle' ,
          url : 'recruteur/mon-profil' ,
        }

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
