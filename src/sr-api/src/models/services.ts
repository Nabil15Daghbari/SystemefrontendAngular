/* tslint:disable */
import { Affectation } from './affectation';
export interface Services {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  nomServices?: string;
  affectation?: Affectation;
  idEntreprise?: number;
}
