/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { DemandesDto } from './demandes-dto';
import { AffectationDto } from './affectation-dto';
export interface CandidatDto {
  cin?: string;
  id?: number;
  nom?: string;
  prenom?: string;
  adresse?: AdresseDto;
  email?: string;
  dateNaissance?: string;
  photo?: string;
  password?: string;
  tele?: string;
  demandes?: Array<DemandesDto>;
  affectation?: Array<AffectationDto>;
  login?: string;
  idEntreprise?: number;
}
