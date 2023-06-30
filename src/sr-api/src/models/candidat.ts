/* tslint:disable */
import { Adresse } from './adresse';
import { Demandes } from './demandes';
import { Affectation } from './affectation';
export interface Candidat {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  cin?: string;
  nom?: string;
  prenom?: string;
  adresse?: Adresse;
  email?: string;
  dateNaissance?: string;
  photo?: string;
  password?: string;
  tele?: string;
  demandes?: Array<Demandes>;
  affectation?: Array<Affectation>;
  login?: string;
}
