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
  public athdv = 0;
  public bthdv = 0;
  public cthdv = 0;
  public athdi = 0;
  public bthdi = 0;
  public cthdi = 0;
  public channel: number = 1;
  title = 'angular-pro-sidebar';
  constructor(public sidebarservice: SidebarService, private http: HttpClient) { }

  public doughnutChartLabels: Label[] = ['Porcentaje de distorsión'];
  public doughnutChartAData: MultiDataSet = [
    [0, 0]
  ];
  public doughnutChartBData: MultiDataSet = [
    [0, 0]
  ];
  public doughnutChartCData: MultiDataSet = [
    [0, 0]
  ];
  public doughnutChartAIData: MultiDataSet = [
    [10, 20]
  ];
  public doughnutChartBIData: MultiDataSet = [
    [10, 20]
  ];
  public doughnutChartCIData: MultiDataSet = [
    [10, 20]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  private donutColorsA = [
    {
      backgroundColor: [
        'rgba(24, 93, 220, 1)'
      ]
    }
  ];
  private donutColorsB = [
    {
      backgroundColor: [
        'rgba(118, 183, 172, 1)'
      ]
    }
  ];
  private donutColorsC = [
    {
      backgroundColor: [
        'rgba(226, 189, 111, 54)'
      ]
    }
  ];
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public lineChartData: ChartDataSets[] = [
    { data: [0], label: 'A VRMS' },
    { data: [0], label: 'A V1RMS' },
    { data: [0], label: 'A VHRMS' }
    // { data: [0], label: 'Línea N' }
  ];
  public lineChartBData: ChartDataSets[] = [
    { data: [0], label: 'B VRMS' },
    { data: [0], label: 'B V1RMS' },
    { data: [0], label: 'B VHRMS' }
    // { data: [0], label: 'Línea N' }
  ];
  public lineChartCData: ChartDataSets[] = [
    { data: [0], label: 'C VRMS' },
    { data: [0], label: 'C V1RMS' },
    { data: [0], label: 'C VHRMS' }
    // { data: [0], label: 'Línea N' }
  ];
  public lineChartCurrentData: ChartDataSets[] = [
    { data: [0], label: 'A IRMS' },
    { data: [0], label: 'A I1RMS' },
    { data: [0], label: 'A IFRMS' }
    // { data: [0], label: ' N' }
  ];
  public lineChartCurrentBData: ChartDataSets[] = [
    { data: [0], label: 'B IRMS' },
    { data: [0], label: 'B I1RMS' },
    { data: [0], label: 'B IFRMS' }
    // { data: [0], label: ' N' }
  ];
  public lineChartCurrentCData: ChartDataSets[] = [
    { data: [0], label: 'C IRMS' },
    { data: [0], label: 'C I1RMS' },
    { data: [0], label: 'C IFRMS' }
    // { data: [0], label: ' N' }
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

  public lineChartLabels: Label[] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

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
  changeChannel(message) {
    this.channel = parseInt(message)
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.getData();
    }, 3000);
  }

  ngOnDestroy() {
    if (this.interval) {
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

        for (let item in data) {
          setTimeout(() => {
            // console.log(data[item])
            this.setChartData(0, parseInt(data[item].AVRMS));
            this.setChartData(1, parseInt(data[item].AFVRMS));
            this.setChartData(2, parseInt(data[item].AVHRMS_CAL));
            this.setChartBData(0, parseInt(data[item].BVRMS));
            this.setChartBData(1, parseInt(data[item].BFVRMS));
            this.setChartBData(2, parseInt(data[item].BVHRMS_CAL));
            this.setChartCData(0, parseInt(data[item].CVRMS));
            this.setChartCData(1, parseInt(data[item].CFVRMS));
            this.setChartCData(2, parseInt(data[item].CVHRMS_CAL));
            this.setAthdv(data[item].AVTHD * 100);
            this.setBthdv(data[item].BVTHD * 100);
            this.setCthdv(data[item].CVTHD * 100);
            this.setAthdi(data[item].AITHD * 100);
            this.setBthdi(data[item].BITHD * 100);
            this.setCthdi(data[item].CITHD * 100);
            this.setChartCurrentData(0, parseInt(data[item].AIRMS));
            this.setChartCurrentData(1, parseInt(data[item].AFIRMS));
            this.setChartCurrentData(2, parseInt(data[item].AIHRMS_CAL));
            this.setChartCurrentBData(0, parseInt(data[item].BIRMS));
            this.setChartCurrentBData(1, parseInt(data[item].BFIRMS));
            this.setChartCurrentBData(2, parseInt(data[item].BIHRMS_CAL));
            this.setChartCurrentCData(0, parseInt(data[item].CIRMS));
            this.setChartCurrentCData(1, parseInt(data[item].CFIRMS));
            this.setChartCurrentCData(2, parseInt(data[item].CIHRMS_CAL));
          }, 50);
          // this.setChartData(3, parseInt(data[item].NVRMS));

        }
        // for (const item in data) {
        //   if(item !== "id"){
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

  setChartData(position, value) {
    // console.log('data length ', this.lineChartData[position].data.length);
    // console.log('dataLabel length ', this.lineChartLabels.length);
    // console.log('data ', this.lineChartData[position].data);
    if (this.lineChartData[position].data.length == this.lineChartLabels.length) {
      // console.log('new data ', this.lineChartData[position].data);
      this.lineChartData[position].data[this.lineChartLabels.length] = value
      // console.log('new data NEW', this.lineChartData[position].data);
      let dataArray = [];
      for (let i = 1; i <= this.lineChartLabels.length; i++) {
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
  setChartBData(position, value) {
    // console.log('data length ', this.lineChartData[position].data.length);
    // console.log('dataLabel length ', this.lineChartLabels.length);
    // console.log('data ', this.lineChartData[position].data);
    if (this.lineChartBData[position].data.length == this.lineChartLabels.length) {
      // console.log('new data ', this.lineChartBData[position].data);
      this.lineChartBData[position].data[this.lineChartLabels.length] = value
      // console.log('new data NEW', this.lineChartBData[position].data);
      let dataArray = [];
      for (let i = 1; i <= this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartBData[position].data[i]);
      }
      // console.log('temporal data ', dataArray);
      // @ts-ignore
      // console.log('old data ', this.lineChartBData[position].data);
      this.lineChartBData[position].data = dataArray;
      // console.log('NEW data ', this.lineChartBData[position].data);
    } else {
      // @ts-ignore
      this.lineChartBData[position].data.push(value)
    }
  }
  setChartCData(position, value) {
    // console.log('data length ', this.lineChartData[position].data.length);
    // console.log('dataLabel length ', this.lineChartLabels.length);
    // console.log('data ', this.lineChartData[position].data);
    if (this.lineChartCData[position].data.length == this.lineChartLabels.length) {
      // console.log('new data ', this.lineChartCData[position].data);
      this.lineChartCData[position].data[this.lineChartLabels.length] = value;
      // console.log('new data NEW', this.lineChartCData[position].data);
      let dataArray = [];
      for (let i = 1; i <= this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartCData[position].data[i]);
      }
      // console.log('temporal data ', dataArray);
      // @ts-ignore
      // console.log('old data ', this.lineChartCData[position].data);
      this.lineChartCData[position].data = dataArray;
      // console.log('NEW data ', this.lineChartCData[position].data);
    } else {
      // @ts-ignore
      this.lineChartCData[position].data.push(value)
    }
  }
  setChartCurrentData(position, value) {
    // console.log(value)
    if (this.lineChartCurrentData[position].data.length == this.lineChartLabels.length) {
      // this.lineChartCData[position].data[this.lineChartLabels.length] = value
      this.lineChartCurrentData[position].data[this.lineChartLabels.length] = value;
      let dataArray = [];
      for (let i = 1; i <= this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartCurrentData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartCurrentData[position].data = dataArray;
    } else {
      // @ts-ignore
      this.lineChartCurrentData[position].data.push(value)
    }
  }
  setChartCurrentBData(position, value) {
    if (this.lineChartCurrentBData[position].data.length == this.lineChartLabels.length) {
      this.lineChartCurrentBData[position].data[this.lineChartLabels.length] = value
      let dataArray = [];
      for (let i = 1; i <= this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartCurrentBData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartCurrentBData[position].data = dataArray;
    } else {
      // @ts-ignore
      this.lineChartCurrentBData[position].data.push(value)
    }
  }
  setChartCurrentCData(position, value) {
    if (this.lineChartCurrentCData[position].data.length == this.lineChartLabels.length) {
      this.lineChartCurrentCData[position].data[this.lineChartLabels.length] = value
      let dataArray = [];
      for (let i = 1; i <= this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartCurrentCData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartCurrentCData[position].data = dataArray;
    } else {
      // @ts-ignore
      this.lineChartCurrentCData[position].data.push(value)
    }
  }
  setAthdv(value) {
    this.doughnutChartAData = [
      [value, 100 - value]
    ];
    this.athdv = value.toFixed(2);
  };
  setBthdv(value) {
    this.doughnutChartBData = [
      [value, 100 - value]
    ];
    this.bthdv = value.toFixed(2);
  }
  setCthdv(value) {
    this.doughnutChartCData = [
      [value, 100 - value]
    ];
    this.cthdv = value.toFixed(2);
  }
  setAthdi(value) {
    this.doughnutChartAIData = [
      [value, 100 - value]
    ];
    this.athdi = value.toFixed(2);
  };
  setBthdi(value) {
    this.doughnutChartBIData = [
      [value, 100 - value]
    ];
    this.bthdi = value.toFixed(2);
  }
  setCthdi(value) {
    this.doughnutChartCIData = [
      [value, 100 - value]
    ];
    this.cthdi = value.toFixed(2);
  }
  setLineChartWattData(position, value) {
    if (this.lineChartWattData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for (let i = 1; i < this.lineChartLabels.length; i++) {
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
  setLineChartVarData(position, value) {
    if (this.lineChartVarData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for (let i = 1; i < this.lineChartLabels.length; i++) {
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
  setLineChartVaData(position, value) {
    if (this.lineChartVaData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for (let i = 1; i < this.lineChartLabels.length; i++) {
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
  setLineChartThdiData(position, value) {
    if (this.lineChartThdiData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for (let i = 1; i < this.lineChartLabels.length; i++) {
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
  setLineChartThdvData(position, value) {
    if (this.lineChartThdvData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for (let i = 1; i < this.lineChartLabels.length; i++) {
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
