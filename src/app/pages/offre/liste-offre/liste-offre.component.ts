import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';


@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
    id: '1' ,
    titre:'Gestion des Offres', 
    icon :'zmdi zmdi-coffee text-danger' ,
    url : '' ,
    sousMenu: [
      {
        id: '11',
        titre: 'Liste Offres',
        icon: 'zmdi zmdi-share text-info',
        url: 'Liste-Offre'
      },
      {
        id: '12',
        titre: 'Ajouter Offre',
        icon: 'zmdi zmdi-chart-donut text-success',
        url: ''
      },
      {
        id: '13',
        titre: 'Les Offres actuelles',
        icon: 'zmdi zmdi-chart-donut text-success',
        url: ''
      }
    ]
  },
    {
      id: '2',
      titre: 'Gestion Recruteur ',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '21' ,
          titre:'Liste des Recruteur', 
          icon :'fa-brands fa-twitter' ,
          url : '' ,
        },
        {
          id: '22' ,
          titre:'Ajouter Recruteur', 
          icon :'fa-brands fa-twitter' ,
          url : '' ,
        }
      ]
    },
    {
      id: '3',
      titre: 'Gestion Services ',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '31' ,
          titre:'Liste des Services', 
          icon :'fa-brands fa-twitter' ,
          url : '' ,
        },
        {
          id: '32' ,
          titre:'Ajouter Services', 
          icon :'fa-brands fa-twitter' ,
          url : '' ,
        }
      ]
    } ,
    {
      id: '4',
      titre: 'Mon compte',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '41' ,
          titre:'Mon compte', 
          icon :'fa-brands fa-twitter' ,
          url : '' ,
        },
        {
          id: '42' ,
          titre:'Modifier compte', 
          icon :'fa-brands fa-twitter' ,
          url : '' ,
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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

