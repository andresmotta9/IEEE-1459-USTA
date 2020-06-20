import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from '../../sidebar/sidebar.service';
import { ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public interval;
  public interval2;
  public interval3;
  public channel: number = 1;
  title = 'angular-pro-sidebar';
  constructor(public sidebarservice: SidebarService, private http: HttpClient) { }

  public doughnutChartLabels: Label[] = ['Porcentaje de distorsión'];
  public doughnutChartData: MultiDataSet = [
    [350],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  private donutColors=[
    {
      backgroundColor: [
        'rgba(118, 183, 172, 1)'
    ]
    }
  ];
  private donutColorsB=[
    {
      backgroundColor: [
        'rgba(118, 183, 172, 1)'
    ]
    }
  ];
  private donutColorsC=[
    {
      backgroundColor: [
        'rgba(226, 189, 111, 54)'
    ]
    }
  ];
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public lineChartData: ChartDataSets[] = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea N' }
  ];
  public lineChartCurrentData: ChartDataSets[] = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea N' }
  ];
  public lineChartWattData: ChartDataSets[] = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea N' }
  ];
  public lineChartVarData: ChartDataSets[] = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea N' }
  ];
  public lineChartVaData: ChartDataSets[] = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea N' }
  ];
  public lineChartThdiData: ChartDataSets[] = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea N' }
  ];
  public lineChartThdvData: ChartDataSets[] = [
    { data: [0], label: 'Línea A' },
    { data: [0], label: 'Línea B' },
    { data: [0], label: 'Línea C' },
    { data: [0], label: 'Línea N' }
  ];

  public lineChartLabels: Label[] = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  public lineChartOptions: any = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType = 'line';

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
  changeChannel(message)
  {
    this.channel = parseInt(message)
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.getData(); 
    }, 1000);
  }

  ngOnDestroy() {
    if(this.interval) {
      clearInterval(this.interval)
    }
    // if(this.interval2) {
    //   clearInterval(this.interval2)
    // }
    // if(this.interval3) {
    //   clearInterval(this.interval3)
    // }
  }

  getData() {
    this.http.get('https://tesis-node-mysql.herokuapp.com/registers')
    .subscribe((data: any) => {
      console.log(data)
      // for (const item in data) {
      //   if(item !== "id"){
      //     this.setChartData(0, parseInt(data[item].VAWV));
      //     this.setChartData(1, parseInt(data[item].VBWV));
      //     this.setChartData(2, parseInt(data[item].VCWV));
      //     this.setChartData(3, parseInt(data[item].VNWV));
      //     this.setChartCurrentData(0, parseInt(data[item].IAWV));
      //     this.setChartCurrentData(1, parseInt(data[item].IBWV));
      //     this.setChartCurrentData(2, parseInt(data[item].ICWV));
      //     this.setChartCurrentData(3, parseInt(data[item].INWV));
      //     this.setLineChartWattData(0, parseInt(data[item].AWATT));
      //     this.setLineChartWattData(1, parseInt(data[item].BWATT));
      //     this.setLineChartWattData(2, parseInt(data[item].CWATT));
      //     this.setLineChartWattData(3, parseInt(data[item].NWATT));
      //     this.setLineChartVarData(0, parseInt(data[item].AVAR));
      //     this.setLineChartVarData(1, parseInt(data[item].BVAR));
      //     this.setLineChartVarData(2, parseInt(data[item].CVAR));
      //     this.setLineChartVarData(3, parseInt(data[item].NVAR));
      //     this.setLineChartVaData(0, parseInt(data[item].AVA));
      //     this.setLineChartVaData(1, parseInt(data[item].BVA));
      //     this.setLineChartVaData(2, parseInt(data[item].CVA));
      //     this.setLineChartVaData(3, parseInt(data[item].NVA));
      //     this.setLineChartThdiData(0, parseInt(data[item].AVTHD));
      //     this.setLineChartThdiData(1, parseInt(data[item].BVTHD));
      //     this.setLineChartThdiData(2, parseInt(data[item].CVTHD));
      //     this.setLineChartThdiData(3, parseInt(data[item].NVTHD));
      //     this.setLineChartThdiData(0, parseInt(data[item].AITHD));
      //     this.setLineChartThdiData(1, parseInt(data[item].BITHD));
      //     this.setLineChartThdiData(2, parseInt(data[item].CITHD));
      //     this.setLineChartThdiData(3, parseInt(data[item].NITHD));
      //     this.setLineChartThdvData(0, parseInt(data[item].AITHD));
      //     this.setLineChartThdvData(1, parseInt(data[item].BITHD));
      //     this.setLineChartThdvData(2, parseInt(data[item].CITHD));
      //     this.setLineChartThdvData(3, parseInt(data[item].NITHD));
      //     this.setLineChartThdvData(0, parseInt(data[item].AVTHD));
      //     this.setLineChartThdvData(1, parseInt(data[item].BVTHD));
      //     this.setLineChartThdvData(2, parseInt(data[item].CVTHD));
      //     this.setLineChartThdvData(3, parseInt(data[item].NVTHD));
      //   }
      // }
    })
  }

  setChartData(position, value)
  {
    // console.log('data length ', this.lineChartData[position].data.length);
    // console.log('dataLabel length ', this.lineChartLabels.length);
    // console.log('data ', this.lineChartData[position].data);
    if (this.lineChartData[position].data.length == this.lineChartLabels.length - 1) {
      // console.log('new data ', this.lineChartData[position].data);
      this.lineChartData[position].data[this.lineChartLabels.length - 1] = value
      // console.log('new data NEW', this.lineChartData[position].data);
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartData[position].data[i]);
      }
      // console.log('temporal data ', dataArray);
      // @ts-ignore
      // console.log('old data ', this.lineChartData[position].data);
      this.lineChartData[position].data = dataArray;
      // console.log('NEW data ', this.lineChartData[position].data);
    } else {
      // @ts-ignore
      this.lineChartData[position].data.push(value)
    }
  }
  setChartCurrentData(position, value)
  {
    if (this.lineChartCurrentData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartCurrentData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartCurrentData[position].data = dataArray;
      this.lineChartCurrentData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      // @ts-ignore
      this.lineChartCurrentData[position].data.push(value)
    }
  }  
  setLineChartWattData(position, value)
  {
    if (this.lineChartWattData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartWattData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartWattData[position].data = dataArray;
      this.lineChartWattData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      // @ts-ignore
      this.lineChartWattData[position].data.push(value)
    }
  }
  setLineChartVarData(position, value)
  {
    if (this.lineChartVarData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartVarData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartVarData[position].data = dataArray;
      this.lineChartVarData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      // @ts-ignore
      this.lineChartVarData[position].data.push(value)
    }
  }
  setLineChartVaData(position, value)
  {
    if (this.lineChartVaData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartVaData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartVaData[position].data = dataArray;
      this.lineChartVaData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      // @ts-ignore
      this.lineChartVaData[position].data.push(value)
    }
  }
  setLineChartThdiData(position, value)
  {
    if (this.lineChartThdiData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartThdiData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartThdiData[position].data = dataArray;
      this.lineChartThdiData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      // @ts-ignore
      this.lineChartThdiData[position].data.push(value)
    }
  }
  setLineChartThdvData(position, value)
  {
    if (this.lineChartThdvData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartThdvData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartThdvData[position].data = dataArray;
      this.lineChartThdvData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      // @ts-ignore
      this.lineChartThdvData[position].data.push(value)
    }
  }
}
