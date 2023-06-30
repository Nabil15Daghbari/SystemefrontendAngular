/* tslint:disable */
import { Offres } from './offres';
export interface Admin {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  password?: string;
  age?: number;
  login?: string;
  photo?: string;
  offres?: Array<Offres>;
  telephone?: string;
}
