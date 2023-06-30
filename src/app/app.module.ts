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
import {AccordionModule} from 'primeng/accordion'; 



import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import { AjouterRecruteurComponent } from './pages/recruteur/ajouter-recruteur/ajouter-recruteur/ajouter-recruteur.component';
import { DashboardCandidatComponent } from './pages/dashboard-candidat/dashboard-candidat.component';

import { SpeedDialModule } from 'primeng/speeddial';
import { CandidaturesComponent } from './pages/offre/candidatures/candidatures.component';
import { ToastModule } from 'primeng/toast';
import { PostulerComponent } from './pages/offre/postuler/postuler.component';

import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { ProfilCandidatComponent } from './pages/profil/profil-Candidat/profil-candidat/profil-candidat.component';
import { DashboardRecruteurComponent } from './pages/dashboard-recruteur/dashboard-recruteur.component';
import { ListerOffresComponent } from './pages/recruteur/lister-offres/lister-offres.component';
import {InputTextModule} from 'primeng/inputtext';
import { ActuellesOffresComponent } from './pages/offre/actuelles-offres/actuelles-offres.component';
import { CalendarComponent } from './pages/recruteur/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import {SplitButtonModule} from 'primeng/splitbutton';
import { AjouterOffreComponent } from './pages/offre/ajouter-offre/ajouter-offre.component';
import { HttpInterceptorService } from './service/interceptor/http-interceptor.service';
import { ProfilRecruteurComponent } from './pages/profil/profil-recruteur/profil-recruteur.component';
import { PageLoginRecComponent } from './pages/page-login-rec/page-login-rec.component';
import { HomeComponent } from './pages/home/home.component';
import { PageLoginCandidatComponent } from './pages/page-login-candidat/page-login-candidat.component';
import { EnCoursComponent } from './pages/demande/en-cours/en-cours.component';
import { AttendeComponent } from './pages/demande/attende/attende.component';
import { AdmisComponent } from './pages/demande/admis/admis.component';
import { ConvoquerEntretienComponent } from './pages/demande/convoquer-entretien/convoquer-entretien.component';
import { ChartsModule } from 'ng2-charts';




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);





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
    AjouterRecruteurComponent,
    DashboardCandidatComponent,
    CandidaturesComponent,
    PostulerComponent,
    BouttonActionComponent,
    ProfilCandidatComponent,
    DashboardRecruteurComponent,
    ListerOffresComponent,
    ActuellesOffresComponent,
    CalendarComponent,
    ProfilRecruteurComponent,
    PageLoginRecComponent,
    HomeComponent,
    PageLoginCandidatComponent,
    EnCoursComponent,
    AttendeComponent,
    AdmisComponent,
    ConvoquerEntretienComponent , 
    
    
     



    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule , 
    AccordionModule ,
    BrowserAnimationsModule,
    ToastrModule . forRoot ( ) ,
    FileUploadModule ,
    HttpClientModule ,
    ConfirmDialogModule ,
    DynamicDialogModule ,
    ToastModule ,
    DialogModule ,
    SpeedDialModule ,
    ButtonModule ,
    SpeedDialModule ,
    InputTextModule ,
    FullCalendarModule ,
    ScheduleModule, RecurrenceEditorModule ,
    SplitButtonModule ,
    ReactiveFormsModule ,
    ChartsModule
    
    
    
  
  ],


 


  providers: [
    MessageService ,
    ConfirmationService ,
    DialogService ,
    DayService , WeekService , WorkWeekService , MonthService , MonthAgendaService ,
    
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
