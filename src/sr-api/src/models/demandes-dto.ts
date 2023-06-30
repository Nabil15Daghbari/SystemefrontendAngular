/* tslint:disable */
import { CandidatDto } from './candidat-dto';
import { OffresDto } from './offres-dto';
export interface DemandesDto {
  id?: number;
  dateDemande?: number;
  cin?: string;
  nom?: string;
  prenom?: string;
  adresse?: string;
  email?: string;
  tele?: string;
  poste?:string ;
  candidat?: CandidatDto;
  offre?: OffresDto;
  etatDemande?: 'EN_COURS' | 'ADMIS' | 'LISTE_ATTENTE' | 'CONVOQUUE_ENTRETIEN';
  demandeAccepte?: boolean;
  statutCondidature?: number;
  idEntreprise?: number;
}
