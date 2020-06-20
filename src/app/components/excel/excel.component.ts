import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('https://tesis-node-mysql.herokuapp.com/registers')
    .subscribe((data: any) => {
      console.log(data)
    })
  }

  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Resultados');
    XLSX.writeFile(wb, 'datos.xlsx');  
  }  

}
