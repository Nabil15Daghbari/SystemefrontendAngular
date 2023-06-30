import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AjouterRecruteurComponent } from './pages/recruteur/ajouter-recruteur/ajouter-recruteur/ajouter-recruteur.component';
import { DashboardCandidatComponent } from './pages/dashboard-candidat/dashboard-candidat.component';
import { CandidaturesComponent } from './pages/offre/candidatures/candidatures.component';
import { PostulerComponent } from './pages/offre/postuler/postuler.component';
import { ProfilCandidatComponent } from './pages/profil/profil-Candidat/profil-candidat/profil-candidat.component';
import { DashboardRecruteurComponent } from './pages/dashboard-recruteur/dashboard-recruteur.component';
import { ListerOffresComponent } from './pages/recruteur/lister-offres/lister-offres.component';
import { ActuellesOffresComponent } from './pages/offre/actuelles-offres/actuelles-offres.component';
import { CalendarComponent } from './pages/recruteur/calendar/calendar.component';
import { ApplicationGuardService } from './service/guard/application-guard.service';
import { ProfilRecruteurComponent } from './pages/profil/profil-recruteur/profil-recruteur.component';
import { PageLoginRecComponent } from './pages/page-login-rec/page-login-rec.component';
import { HomeComponent } from './pages/home/home.component';
import { PageLoginCandidatComponent } from './pages/page-login-candidat/page-login-candidat.component';
import { CandidatGuardService } from './service/guard-Candidat/candidat-guard.service';
import { RecruteurGuardService } from './service/guard-Recruteur/recruteur-guard.service';
import { EnCoursComponent } from './pages/demande/en-cours/en-cours.component';
import { AttendeComponent } from './pages/demande/attende/attende.component';
import { AdmisComponent } from './pages/demande/admis/admis.component';
import { ConvoquerEntretienComponent } from './pages/demande/convoquer-entretien/convoquer-entretien.component';

const routes: Routes = [

  {
    path: '' ,
    component: HomeComponent   
  },
{
  path: 'login' ,
  component: PageLoginComponent
},

{
  path: 'login-Recruteur' ,
  component: PageLoginRecComponent
},

{
  path: 'login-Candidat' ,
  component: PageLoginCandidatComponent
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
  canActivate: [ApplicationGuardService],
  children: [
    {
      path: 'Statistiques',
      component: PageStatistiquesComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Liste-Offre',
      component: ListeOffreComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Liste-Offre/:idOffre',
      component: ListeOffreComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Liste-Offre',
      component: ListeOffreComponent,
      canActivate: [ApplicationGuardService],
    },
    
    {
      path: 'ajouter-offre',
      component: AjouterOffreComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'modifier-offre',
      component: ModifierOffreComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Liste-Recruteur',
      component: PageRecruteurComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Liste-Recruteur/:idRecruteur',
      component: PageRecruteurComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Ajouter-Recruteur',
      component: AjouterRecruteurComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Liste-Candidat',
      component: PageCandidatComponent,
      canActivate: [ApplicationGuardService],
    },

    
    {
      path: 'Liste-servies',
      component: ListeServicesComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Liste-servies/:idService',
      component: ListeServicesComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'ajouter-servies',
      component: AjouterServiceComponent,
      canActivate: [ApplicationGuardService],
      
    },
    {
      path: 'modifier-servies',
      component: ModifierServiceComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'List-candidat par servies',
      component: ListCandidatServicesComponent,
      canActivate: [ApplicationGuardService],
    },
    {
      path: 'Mon-profil',
      component: PageProfilComponent,
      canActivate: [ApplicationGuardService],
    }


  ]
},





{
  path:"candidat" ,
  component: DashboardCandidatComponent,
  canActivate: [CandidatGuardService],
  children: [
    {
      path: 'offre-actuelles',
      component :ActuellesOffresComponent ,
      canActivate: [CandidatGuardService],
    },
    {
      path: 'offre-actuelles/:idOffre',
      component :ActuellesOffresComponent ,
      canActivate: [CandidatGuardService],
    },
    {
      path: 'candidatures',
      component :CandidaturesComponent ,
      canActivate: [CandidatGuardService],
    },
    {
      path: 'postuler',
      component :PostulerComponent ,
      canActivate: [CandidatGuardService],
    },
    {
      path: 'mon-profil',
      component :ProfilCandidatComponent ,
      canActivate: [CandidatGuardService],
    }
    
   ]
},

{
  path:"recruteur" ,
  component: DashboardRecruteurComponent,
  canActivate: [RecruteurGuardService],
  children: [
    {
      path: 'lister-offres',
      component :ListerOffresComponent ,
      canActivate: [RecruteurGuardService],

      
    },
    {
      path: 'lister-offres/:idDem',
      component :ListerOffresComponent ,
      canActivate: [RecruteurGuardService],

      
    },
    {
      path: 'lister-offres/:idDemande',
      component :ListerOffresComponent ,
      canActivate: [RecruteurGuardService],

      
    },
    {
      path: 'candidatures',
      component :CandidaturesComponent ,
      canActivate: [RecruteurGuardService],

     
    },
    {
      path: 'Filtrer-Le-Demande',
      component :EnCoursComponent ,
      canActivate: [RecruteurGuardService],

     
    },
    {
      path: 'demande-En-Attende',
      component :AttendeComponent ,
      canActivate: [RecruteurGuardService],

     
    },
    {
      path: 'demande-Convoquer-En-Entretien',
      component :ConvoquerEntretienComponent ,
      canActivate: [RecruteurGuardService],

     
    },
    {
      path: 'demande-Admis',
      component :AdmisComponent ,
      canActivate: [RecruteurGuardService],

     
    },
    {
      path: 'Calender',
      component :CalendarComponent ,
      canActivate: [RecruteurGuardService],

     
    },
    {
      path: 'mon-profil',
      component :ProfilRecruteurComponent ,
      canActivate: [RecruteurGuardService],

      
    }
    
   ]
},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
