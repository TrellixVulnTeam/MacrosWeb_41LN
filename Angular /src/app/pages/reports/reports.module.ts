import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { MatCardModule } from '@angular/material/card';
import { PipeModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    MatCardModule,
    PipeModule
  ]
})
export class ReportsModule { }
