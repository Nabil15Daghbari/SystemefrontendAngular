/* tslint:disable */
import { AdminDto } from './admin-dto';
import { RecruteurDto } from './recruteur-dto';
import { DemandesDto } from './demandes-dto';
export interface OffresDto {
  codeOffre?: string;
  id?: number;
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
  dateExpiration?: number;
  salaire?: number;
  admin?: AdminDto;
  recruteur?: RecruteurDto;
  demandes?: Array<DemandesDto>;
  idEntreprise?: number;
}
