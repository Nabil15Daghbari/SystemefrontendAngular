/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { OffresDto } from './offres-dto';
export interface RecruteurDto {
  id?: number;
  cin?: string;
  age?: number;
  nom?: string;
  prenom?: string;
  adresse?: AdresseDto;
  photo?: string;
  tele?: string;
  login?: string;
  password?: string;
  offres?: Array<OffresDto>;
  poste?: string;


  adresse1?: string;
  ville?: string;
  codePostale?: string;
  pays?: string;
}
