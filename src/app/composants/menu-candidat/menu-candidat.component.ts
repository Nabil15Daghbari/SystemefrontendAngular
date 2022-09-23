import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu-candidat',
  templateUrl: './menu-candidat.component.html',
  styleUrls: ['./menu-candidat.component.css']
})
export class MenuCandidatComponent implements OnInit {

    public menuProperties: Array<Menu> = [
      {
      id: '1' ,
      titre:'Offres et Demandes', 
      icon :'zmdi zmdi-coffee text-danger' ,
      url : '' ,
      sousMenu: [
        {
          id: '11',
          titre: 'Offre actuelles',
          icon: 'zmdi zmdi-share text-info',
          url: ''
        },
        {
          id: '12',
          titre: 'Mes Candidatures',
          icon: 'zmdi zmdi-chart-donut text-success',
          url: ''
        }
      ]
    },
      {
        id: '2',
        titre: 'Mon compte',
        icon: '',
        url: '',
        sousMenu: [
          {
            id: '21' ,
            titre:'Mon compte', 
            icon :'fa-brands fa-twitter' ,
            url : '' ,
          },
          {
            id: '22' ,
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
  


 

