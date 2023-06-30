/* tslint:disable */
import { Candidat } from './candidat';
import { Offres } from './offres';
export interface Demandes {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  dateDemande?: number;
  etatDemande?: 'ENCOURS' | 'ADMIS' | 'LISTEATTENTE' | 'CONVOQUUEPOURENTRETIEN';
  candidat?: Candidat;
  offre?: Offres;
}
