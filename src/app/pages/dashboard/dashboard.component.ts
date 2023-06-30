import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';
import { Demande0Service } from 'src/app/service/demande/demande0.service';
import { Offre0Service } from 'src/app/service/offre/offre0.service';
import { UserService } from 'src/app/service/user/user.service';
import { DemandesDto, OffresDto } from 'src/sr-api/src/models';
import { UtilisateurDto } from 'src/sr-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  connectedUser: UtilisateurDto = {};
  dateToday:String | undefined;
  today = new Date();
  moyenSalaire!:number;
  nbrDemandeAdmis!:number;






  constructor(
    private userService: UserService ,
    private router : Router ,
    private DashboardService : DashboardService ,
    private offreService : Offre0Service ,
    private demandeService : Demande0Service

  ) { 
    setInterval(() =>{
      const currentDate = new Date();
      this.dateToday = currentDate.toLocaleTimeString();
       }, 1000);

       
}

  
  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();

    this.offreService.CalculerMoyenSalaire().subscribe((data:any)=>{
      this.moyenSalaire=data;
    })

    this.demandeService.NombreDemandeAdmis("ADMIS").subscribe((data:any)=>{
      this.nbrDemandeAdmis=data;
    })

   
   
  }



  deconexion(){
    this.router.navigate(['']);
    localStorage.clear();
  }

  compte(){
    this.router.navigate(['/admin/Mon-profil']);  
  }



  
}
