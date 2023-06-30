/* tslint:disable */
import { Demandes } from './demandes';
import { Recruteur } from './recruteur';
import { Admin } from './admin';
export interface Offres {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  codeOffre?: string;
  poste?: string;
  mission?: string;
  connaissances?: string;
  niveauEtudes?: string;
  formation?: string;
  experience?: string;
  criteres?: string;
  domaine?: string;
  langues?: string;
  nbrARecruter?: number;
  cantrat?: string;
  ville?: string;
  dateExpiration?: string;
  salaire?: number;
  demandes?: Array<Demandes>;
  recruteur?: Recruteur;
  admin?: Admin;
}
