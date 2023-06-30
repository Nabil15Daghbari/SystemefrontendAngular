import { Component, OnInit } from '@angular/core';
import { ServicesDto } from 'src/sr-api/src/models/services-dto';

@Component({
  selector: 'app-modifier-service',
  templateUrl: './modifier-service.component.html',
  styleUrls: ['./modifier-service.component.css']
})
export class ModifierServiceComponent implements OnInit {

  edidtserviceDialogue :boolean = false

  serviceDto :ServicesDto = {} ;



  constructor() { }

  ngOnInit(): void {
  }



  
  editService(serviceDto : ServicesDto){
    this.serviceDto = serviceDto;

    this.edidtserviceDialogue =true
  

  }

}
