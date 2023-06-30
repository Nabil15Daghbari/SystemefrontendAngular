/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { RolesDto } from './roles-dto';
import { EntrepriseDto } from './entreprise-dto';
export interface UtilisateurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  dateDeNaissance?: number;
  moteDePasse?: string;
  adresse?: AdresseDto;
  photo?: string;
  roles?: Array<RolesDto>;
  adresse1?: string;
  ville?: string;
  codePostale?: string;
  pays?: string;
  description?: string;


  entreprise?: EntrepriseDto;
}
