/* tslint:disable */
import { Candidat } from './candidat';
import { Services } from './services';
export interface Affectation {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  dateAffectation?: string;
  candidat?: Candidat;
  services?: Array<Services>;
}
