import { Component,  } from '@angular/core';
import { IndividualConfig } from 'ngx-toastr';
import { NgToastService, toastPayload   } from 'src/app/service/services/ng-toast.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent   { 
  constructor(private cs: NgToastService) { }
   title = 'System_Recrutement';
}
