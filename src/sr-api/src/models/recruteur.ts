/* tslint:disable */
import { Adresse } from './adresse';
import { Offres } from './offres';
export interface Recruteur {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  cin?: string;
  age?: number;
  email?: string;
  nom?: string;
  prenom?: string;
  adresse?: Adresse;
  photo?: string;
  tele?: string;
  login?: string;
  password?: string;
  offres?: Array<Offres>;
  poste?: string;
  
  adresse1?: string;
  ville?: string;
  codePostale?: string;
  pays?: string;
}
