/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface EntrepriseDto {
  id?: number;
  nom?: string;
  description?: string;
 // adresse?: AdresseDto;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  steWeb?: string;
  adresse1?: string;
  ville?: string;
  codePostale?: string;
  pays?: string;
  idEntreprise?: number;
}
