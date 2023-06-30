/* tslint:disable */
import { OffresDto } from './offres-dto';
export interface AdminDto {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  password?: string;
  age?: number;
  login?: string;
  photo?: string;
  offres?: Array<OffresDto>;
  telephone?: string;
}
