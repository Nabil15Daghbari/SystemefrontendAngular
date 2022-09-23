import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCandidatComponent } from './composants/menu-candidat/menu-candidat.component';
import { MenuRecruteurComponent } from './composants/menu-recruteur/menu-recruteur.component';
import { PageCandidatComponent } from './pages/candidat/page-candidat/page-candidat.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AjouterOffreComponent } from './pages/offre/ajouter-offre/ajouter-offre.component';
import { ListeOffreComponent } from './pages/offre/liste-offre/liste-offre.component';
import { ModifierOffreComponent } from './pages/offre/modifier-offre/modifier-offre.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { PageRecruteurComponent } from './pages/recruteur/page-recruteur/page-recruteur.component';
import { AjouterServiceComponent } from './pages/services/ajouter-service/ajouter-service.component';
import { ListCandidatServicesComponent } from './pages/candidat/page-candidat/list-candidat-services/list-candidat-services.component';
import { ListeServicesComponent } from './pages/services/liste-services/liste-services.component';
import { ModifierServiceComponent } from './pages/services/modifier-service/modifier-service.component';

const routes: Routes = [
{
  path: 'login' ,
  component: PageLoginComponent
},

{
  path:"inscrire" ,
  component: PageInscriptionComponent
},

{
  path:"menu-recruteur" ,
  component: MenuRecruteurComponent
},
{
  path:"admin" ,
  component: DashboardComponent,
  children: [
    {
      path: 'Statistiques',
      component: PageStatistiquesComponent,
    },
    {
      path: 'Liste-Offre',
      component: ListeOffreComponent,
    },
    
    {
      path: 'ajouter-offre',
      component: AjouterOffreComponent,
    },
    {
      path: 'modifier-offre',
      component: ModifierOffreComponent,
    },
    {
      path: 'Liste-Recruteur',
      component: PageRecruteurComponent,
    },
    {
      path: 'Liste-Candidat',
      component: PageCandidatComponent,
    },

    
    {
      path: 'Liste-servies',
      component: ListeServicesComponent,
    },
    {
      path: 'ajouter-servies',
      component: AjouterServiceComponent,
    },
    {
      path: 'modifier-servies',
      component: ModifierServiceComponent,
    },
    {
      path: 'List-candidat par servies',
      component: ListCandidatServicesComponent,
    },





    {
      path: 'Mon-profil',
      component: PageProfilComponent,
    }


  ]
},




{
  path:"menu-candidat" ,
  component: MenuCandidatComponent
},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
