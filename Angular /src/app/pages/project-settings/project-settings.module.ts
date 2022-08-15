import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectSettingsRoutingModule } from './project-settings-routing.module';
import { ProjectSettingsComponent } from './project-settings.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LegalizacionService } from 'src/app/services/legalizacion.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from 'src/app/pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjectSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ProjectSettingsRoutingModule,
    SharedModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    PipeModule,
    HttpClientModule
  ],
  providers:[
    LegalizacionService
  ]
})
export class ProjectSettingsModule { }
