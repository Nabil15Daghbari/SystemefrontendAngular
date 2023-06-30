import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServicesDto } from 'src/sr-api/src/models/services-dto';
import { ApiService, ServiceService } from 'src/sr-api/src/services';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class Service0Service {

  constructor(

    private servicesService : ServiceService ,
    private apiService : ApiService ,
    private userService : UserService

  ) { }

  findAll(): Observable<ServicesDto[]> {
    return this.apiService.findAll_3();
  }

  
  enregistreServices(servicesDto: ServicesDto ): Observable<ServicesDto> {
    servicesDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.apiService.save_4(servicesDto);
  }


  delete(idService?: number): Observable<any> {
    if (idService) {
      return this.servicesService.delete(idService);
    }
    return of();
  }

 

}
