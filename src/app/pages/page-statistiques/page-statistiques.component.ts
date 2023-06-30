import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts/public_api';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Demande0Service } from 'src/app/service/demande/demande0.service';
import { OffresDto } from 'src/sr-api/src/models';

@Component({
  selector: 'app-page-statistiques',
  templateUrl: './page-statistiques.component.html',
  styleUrls: ['./page-statistiques.component.css']
})
export class PageStatistiquesComponent implements OnInit {
  nbrDemandeByOffre:any;
  offreDto: OffresDto = {};


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 20,
        }
      }
    }
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },

  ];
 

  constructor( private demandeService : Demande0Service) { 
   
  }
  
  
  lineChartColors: Color[] = [
    {
      borderColor: 'rgb(350, 99, 71)',
      backgroundColor: 'rgb(350, 99, 71)',
    },
  ];

  ngOnInit(): void {

    // this.demandeService.NombreDemandeByOffree().subscribe((data:any)=>{
    //   this.nbrDemandeByOffre=data; 
    // })

    this.getChart(); 
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];  
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }



getChart(){
    this.nbrDemandeByOffre=[];

    this.demandeService.NombreDemandeByOffree().subscribe((data:any[])=>{
     // debugger
      console.log(data)
      data.forEach(e => {
         this.barChartLabels.push(e[0]);
         this.nbrDemandeByOffre.push(e[1]);
console.log(this.nbrDemandeByOffre)
      });
       this.barChartData=[
         { data: this.nbrDemandeByOffre,
            label: 'Nombre demande par offre' },
       ]
    })
  }

  


}
