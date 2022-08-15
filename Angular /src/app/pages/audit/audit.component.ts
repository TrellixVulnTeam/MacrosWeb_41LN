import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { LegalizacionService } from 'src/app/services/legalizacion.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  displayedColumns: string[] = ['fecha_modificacion', 'UNI_ID', 'herramienta', 'campo', 'valor_anterior', 'valor_actual', 'usuario'];
  dataSource = new MatTableDataSource<any>();

  campaignOne: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _legalizacionService: LegalizacionService
  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date()),
      end: new FormControl(new Date()),
      herramienta: new FormControl(),
      usuario: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAudit(this.campaignOne.controls['start'].value, this.campaignOne.controls['end'].value,
      this.campaignOne.controls['herramienta'].value, this.campaignOne.controls['usuario'].value);
  }

  getAudit(startTime: any, endTime: any, herramienta: any, usuario: any) {
    startTime = new Date(startTime).toISOString().slice(0, 10);
    endTime = new Date(endTime).toISOString().slice(0, 10);
    console.log('startTime', startTime);
    console.log('endTime', endTime);



    herramienta = herramienta == null || herramienta == '' || (herramienta != null && String(herramienta).trim() == '') || herramienta == '<empty string>' ? null : herramienta;
    usuario = usuario == null || usuario == '' || (usuario != null && String(usuario).trim() == '') || usuario == '<empty string>' ? null : usuario;

    console.log(herramienta);
    console.log(usuario);

    AppComponent.displayLoading = true;
    this._legalizacionService.getAudit(startTime, endTime, herramienta, usuario)
      .subscribe(
        (response: any) => {
          AppComponent.displayLoading = false;
          console.log('response', response);
          this.dataSource = new MatTableDataSource<any>(response.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, err => {
          AppComponent.displayLoading = false;
        }
      )
  }
  searchAudit() {
    this.getAudit(this.campaignOne.controls['start'].value, this.campaignOne.controls['end'].value,
      this.campaignOne.controls['herramienta'].value, this.campaignOne.controls['usuario'].value);
  }
}

