import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuCandidatComponent } from './composants/menu-candidat/menu-candidat.component';
import { MenuRecruteurComponent } from './composants/menu-recruteur/menu-recruteur.component';
import { MenuAdminComponent } from './composants/menu-admin/menu-admin.component';
import { ListeOffreComponent } from './pages/offre/liste-offre/liste-offre.component';
import { AjouterOffreComponent } from './pages/offre/ajouter-offre/ajouter-offre.component';
import { PageCandidatComponent } from './pages/candidat/page-candidat/page-candidat.component';
import { RecruteurComponent } from './pages/recruteur/recruteur.component';
import { PageRecruteurComponent } from './pages/recruteur/page-recruteur/page-recruteur.component';
import { DetailRecruteurComponent } from './composants/detail-recruteur/detail-recruteur.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { DetailCandidatComponent } from './composants/detail-candidat/detail-candidat.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { AjouterServiceComponent } from './pages/services/ajouter-service/ajouter-service.component';
import { ListeServicesComponent } from './pages/services/liste-services/liste-services.component';
import { ListCandidatServicesComponent } from './pages/candidat/page-candidat/list-candidat-services/list-candidat-services.component';
import { ModifierServiceComponent } from './pages/services/modifier-service/modifier-service.component';
import { ModifierOffreComponent } from './pages/offre/modifier-offre/modifier-offre.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    DashboardComponent,
    PageStatistiquesComponent,
    MenuCandidatComponent,
    MenuRecruteurComponent,
    MenuAdminComponent,
    ListeOffreComponent,
    AjouterOffreComponent,
    PageCandidatComponent,
    RecruteurComponent,
    PageRecruteurComponent,
    DetailRecruteurComponent,
    PaginationComponent,
    DetailCandidatComponent,
    PageProfilComponent,
    AjouterServiceComponent,
    ListeServicesComponent,
    ListCandidatServicesComponent,
    ModifierServiceComponent,
    ModifierOffreComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    
    
    
  
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
