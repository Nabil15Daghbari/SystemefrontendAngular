/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AffectationService } from './services/affectation.service';
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { CandidatService } from './services/candidat.service';
import { ContratService } from './services/contrat.service';
import { DemandeService } from './services/demande.service';
import { DocumentService } from './services/document.service';
import { EntretienService } from './services/entretien.service';
import { OffreService } from './services/offre.service';
import { PhotosService } from './services/photos.service';
import { RecruteurService } from './services/recruteur.service';
import { ServiceService } from './services/service.service';
import { UtilisateursService } from './services/utilisateurs.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AffectationService,
    ApiService,
    AuthenticationService,
    CandidatService,
    ContratService,
    DemandeService,
    DocumentService,
    EntretienService,
    OffreService,
    PhotosService,
    RecruteurService,
    ServiceService,
    UtilisateursService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
