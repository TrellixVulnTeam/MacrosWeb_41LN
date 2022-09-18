import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { TableService } from './table.service';
import { UtilsService } from './utils.services';
const EXCEL_EXTENSION = '.xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// import * as campos_fechas from 'src/assets/json/campos_fechas.json';


@Injectable()
export class ExcelExportService {

  LEGALIZACION: number = 1;
  PROMESA: number = 2;
  SUBSIDIO: number = 3;
  SEGUIMIENTO_SUBSIDIO: number = 4;
  ENTREGA: number = 5;
  DESEMBOLSO: number = 6;
  RECAUDO: number = 7;
  TRAZABILIDAD: number = 8;
  ORDENES: number = 9;
  RENOVACION: number = 10;
  ESCRITURACION: number = 11;

  constructor(
    private _utilsService: UtilsService,
    private _tableService: TableService
  ) { }
  public exportAsExcelFile(json: any[], excelFileName: string, reportType: number): void {

    console.log('contendio a exportar reportType', reportType);
    json = json.map((element: any) => {
      var keys: any = Object.keys(element);
      // console.log(keys);
      if (keys.length > 0) {
        keys.forEach((key: any) => {
          // console.log(key);
          // element[key] = evt[key];
          if (this.isColumnDate(key) && element[key] != null) {
            let fechaFormat: Date = new Date(element[key]);
            element[key] = (fechaFormat.getDate() < 10 ? '0' + fechaFormat.getDate() : fechaFormat.getDate()) + '-' + (fechaFormat.getMonth() < 9 ? '0' + (fechaFormat.getMonth() + 1) : (fechaFormat.getMonth() + 1)) + '-' + fechaFormat.getFullYear();
          }
        })
      }

      return element;
    })


    this._tableService.getHeaders(reportType.toString())
    .subscribe(
      (data:any)=>{
        data = data.data;

        let headers = [];
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if(element != 'UNI_ID' && element != 'VTA_ID' && element != 'PRY_ID'){
            headers.push(element);
          }
        }
        console.log('####headerssss ',headers);
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json, { header: headers });
        const workbook: XLSX.WorkBook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
      },err=>{
        console.log('####headerssss ',err);
      }
    )
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  private isColumnDate(name: string) {
    for (let index = 0; index < this._utilsService.camposFecha.length; index++) {
      const element = this._utilsService.camposFecha[index];
      if (element == name) {
        return true;
      }
    }
    return false;
  }
}