import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  @Input() lineChartData: ChartDataSets[]  = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea D' }
  ];
  @Input() name: string = "";

  constructor(private http: HttpClient) { }

  public lineChartLabels: Label[] = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {
  }

}
