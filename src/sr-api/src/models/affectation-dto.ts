/* tslint:disable */
import { CandidatDto } from './candidat-dto';
import { DemandesDto } from './demandes-dto';
import { ServicesDto } from './services-dto';
export interface AffectationDto {
  id?: number;
  dateAffectation?: number;
  demandes?: DemandesDto;
  services?: Array<ServicesDto>;
  idEntreprise?: number;
  nomService?:string ; 
}
