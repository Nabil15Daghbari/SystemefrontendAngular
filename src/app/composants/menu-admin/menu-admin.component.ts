import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Menu } from './menu';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  public menuProperties: Array<Menu> = [
   
    {
      id: '0' ,
      titre:'Dashboard', 
      icon :'zmdi zmdi-view-dashboard' ,
      url : '',
      sousMenu: [
        {
          id: '01',
          titre: 'Statistique',
          icon: 'zmdi zmdi-trending-up',
          url: 'admin/Statistiques'
        }
      ]
    },
   
    {
    id: '1' ,
    titre:'Gestion des Offres', 
    icon :'zmdi zmdi-view-comfy' ,
    url : 'admin/Liste-Offre' ,
     sousMenu: [
       {
         id: '11',
         titre: 'Liste Offres',
         icon: 'zmdi zmdi-view-list',
         url: 'admin/Liste-Offre'
       },
    //    {
    //      id: '12',
    //     titre: 'get offre par id recruteur',
    //      icon: 'zmdi zmdi-border-color',
    //     url: ''
    //   },
    //    {
    //      id: '13',
    //     titre: 'ajouter offre',
    //     url: 'admin/ajouter-offre'
    //  }
    //   {
    //     id: '13',
    //     titre: 'Modifier Offre',
    //     icon: 'zmdi zmdi-format-list-bulleted',
    //     url: 'admin/modifier-offre'
    //   }
     ]
  },
    {
      id: '2',
      titre: 'Gestion  Recruteurs ',
      icon: 'zmdi zmdi-account-box',
      url: '',
      sousMenu: [
        {
          id: '21' ,
          titre:'Liste Recruteur', 
          icon :'zmdi zmdi-format-list-bulleted' ,
          url : 'admin/Liste-Recruteur' ,
        },
        // {
        //   id: '22' ,
        //   titre:'Ajouter Recruteur', 
        //   icon :'zmdi zmdi-accounts-add' ,
        //   url : 'admin/Ajouter-Recruteur' ,
        // }
      ]
    
    
    
    },

    {
      id: '3',
      titre: 'Gestion Des Candiats ',
      icon: 'zmdi zmdi-account-box',
      url: '',
      sousMenu: [
        {
          id: '31' ,
          titre:'Liste Candidats Admis', 
          icon :'pi pi-users' ,
          url : 'admin/Liste-Candidat' ,
        },
        // {
        //   id: '32' ,
        //   titre:'List Candidat/Services', 
        //   icon :'pi pi-user',
        //   url : 'admin/List-candidat par servies' ,
        // }
        
      ]
    
    
    
    },






    {
      id: '4',
      titre: 'Gestion Services ',
      icon: 'zmdi zmdi-sort-amount-asc',
      url: '',
      sousMenu: [
        {
          id: '41' ,
          titre:'Liste des Services', 
          icon :'zmdi zmdi-format-list-numbered' ,
          url : 'admin/Liste-servies' ,
        },
        // {
        //   id: '42' ,
        //   titre:'Ajouter Services', 
        //   icon :'fa-brands fa-twitter' ,
        //   url : 'admin/ajouter-servies' ,
        // },
        // {
        //   id: '43' ,
        //   titre:'Modifier Services', 
        //   icon :'fa-brands fa-twitter' ,
        //   url : 'admin/modifier-servies' ,
        // }, 
        
      ]
    } ,
    {
      id: '5',
      titre: 'Mon compte',
      icon: 'zmdi zmdi-face',
      url: '',
      sousMenu: [
        {
          id: '51' ,
          titre:'Mon compte', 
          icon :'zmdi zmdi-account-circle' ,
          url : 'admin/Mon-profil' ,
         },
        
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router ,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.toastr.info('Bonjour dans l\'espace Admin');

  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}

